import React ,{useContext}from 'react';
import { AppwriteContext } from "./Appwrite";


function Avatar() {
  const appwrite = useContext(AppwriteContext);
  let creditcard=appwrite.createCreditAvatar('amex');
  let flagname=appwrite.createFlagAvatar('IN');
  let qrcode=appwrite.createQrAvatar('FinTechApp',100);
  console.log(creditcard);
  console.log(flagname);
  console.log(qrcode);
   return(
    <div >
      <img src={creditcard} />
      <br/>
      <img src={flagname} />
      <br/>
      <img src={qrcode} />
      <br/>
    </div>
   );
}

export default Avatar;