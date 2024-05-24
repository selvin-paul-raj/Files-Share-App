"use client";
import UploadForm from '@/components/UploadForm'
import { app } from '@/firebaseConfig'
import { generateRandomString } from '@/utils/GenerateRandomStrinf';
import { useUser } from '@clerk/nextjs';
import { getFirestore } from 'firebase/firestore';

import {getDownloadURL, getStorage,ref, uploadBytesResumable,setDoc,doc} from "firebase/storage"
import React, { useState } from 'react'

const Upload = () => {
  const db = getFirestore(app)
  const storage = getStorage(app)
  const {user}=useUser()
  const [progress,setProgress] =useState(0)
  const uploadFile=(file)=>{
    const metadata={
      contentType:file.type
    }
    
    const imageRef = ref(storage,"file-upload/"+file?.name);
    const uploadTask = uploadBytesResumable(imageRef,file,metadata)
    
    uploadTask.on("state_changed",(snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
      setProgress(progress)
      progress==100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        console.log("File :",downloadURL);
        const fileUrl=downloadURL;
        saveInfo(file,fileUrl)
      })
    })
  }
  const saveInfo= async (file,fileUrl)=>{
    const documentId= Date.now().toString();
    await setDoc(doc(db,"uploadedfile",documentId),{
      fileName:file?.name,
      fileSize:file?.size,
      fileType:file?.type,
      fileUrl:fileUrl,
      userEmail:user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      passward:'',
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL+generateRandomString()
    }).then(res=>{
      console.log(res);
    })
  
  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Starrt <strong className='text-primary'>Uploading</strong> File and <strong className='text-primary'>Share</strong> it </h2>
      <UploadForm uploadBtnClick={(file)=>uploadFile(file)} progress={progress}/>
    </div>
  )
}

export default Upload