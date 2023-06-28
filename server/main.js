import { Meteor } from "meteor/meteor";
import { Products } from "../imports/api/products/collection";
import { Basket } from "../imports/api/basket/collection";
import { Random } from "meteor/random";
import "../imports/startup/server/index";
Accounts.emailTemplates.resetPassword = {
  subject() {
    return "Reset your password!";
  },
  html(user, url) {
    let urlWithoutHash = url.replace("#/", "");

    //  TAPi18n.setLanguage(lng)

    return `  <head>
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
     <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
     <!--[if !mso]--><!-- -->
     <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel="stylesheet">
     <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel="stylesheet">
     <!-- <![endif]-->
 
     <title>Material Design for Bootstrap</title>
 
     <style type="text/css">
         body {
             width: 100%;
             background-color: #ffffff;
             margin: 0;
             padding: 0;
             -webkit-font-smoothing: antialiased;
             mso-margin-top-alt: 0px;
             mso-margin-bottom-alt: 0px;
             mso-padding-alt: 0px 0px 0px 0px;
         }
 
         p,
         h1,
         h2,
         h3,
         h4 {
             margin-top: 0;
             margin-bottom: 0;
             padding-top: 0;
             padding-bottom: 0;
         }
 
         span.preheader {
             display: none;
             font-size: 1px;
         }
 
         html {
             width: 100%;
         }
 
         table {
             font-size: 14px;
             border: 0;
         }
         /* ----------- responsivity ----------- */
 
         @media only screen and (max-width: 640px) {
             /*------ top header ------ */
             .main-header {
                 font-size: 20px !important;
             }
             .main-section-header {
                 font-size: 28px !important;
             }
             .show {
                 display: block !important;
             }
             .hide {
                 display: none !important;
             }
             .align-center {
                 text-align: center !important;
             }
             .no-bg {
                 background: none !important;
             }
             /*----- main image -------*/
             .main-image img {
                 width: 440px !important;
                 height: auto !important;
             }
             /* ====== divider ====== */
             .divider img {
                 width: 440px !important;
             }
             /*-------- container --------*/
             .container590 {
                 width: 440px !important;
             }
             .container580 {
                 width: 400px !important;
             }
             .main-button {
                 width: 220px !important;
             }
             /*-------- secions ----------*/
             .section-img img {
                 width: 320px !important;
                 height: auto !important;
             }
             .team-img img {
                 width: 100% !important;
                 height: auto !important;
             }
         }
 
         @media only screen and (max-width: 479px) {
             /*------ top header ------ */
             .main-header {
                 font-size: 18px !important;
             }
             .main-section-header {
                 font-size: 26px !important;
             }
             /* ====== divider ====== */
             .divider img {
                 width: 280px !important;
             }
             /*-------- container --------*/
             .container590 {
                 width: 280px !important;
             }
             .container590 {
                 width: 280px !important;
             }
             .container580 {
                 width: 260px !important;
             }
             /*-------- secions ----------*/
             .section-img img {
                 width: 280px !important;
                 height: auto !important;
             }
         }
     </style>
     <!-- [if gte mso 9]><style type=”text/css”>
         body {
         font-family: arial, sans-serif!important;
         }
         </style>
     <![endif]-->
 </head>
 
 
 <body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" >
     <!-- pre-header -->
     <table style="display:none!important;">
         <tr>
             <td>
                 <div style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;">
                     Pre-header for the newsletter template
                 </div>
             </td>
         </tr>
     </table>
     <!-- pre-header end -->
     <!-- header -->
     <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
 
         <tr>
             <td align="center">
                 <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
 
                     <tr>
                         <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                     </tr>
 
                     <tr>
                         <td align="center">
 
                             <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
 
                                 <tr>
                                     <td align="center" height="70" style="height:70px;">
                                         <a href="https://admin.rahatmall.com/" style="display: block; border-style: none !important; border: 0 !important;"><img  style="display: block;" src="https://admin.rahatmall.com/img/logo_for_email.png" alt="mall icon" /></a>
                                     </td>
                                 </tr>

                             </table>
                         </td>
                     </tr>
 
                     <tr>
                         <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                     </tr>
 
                 </table>
             </td>
         </tr>
     </table>
     <!-- end header -->
 
     <!-- big image section -->
     <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
 
         <tr>
             <td align="center">
                 <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                     
                     <tr>
                         <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                     </tr>
                     <tr>
                         <td align="center" style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;" class="main-header">
                             <div style="line-height: 35px">
                                 Hello, <span style="color: #5caad2;">${user.username}</span>
                             </div>
                         </td>
                     </tr>
 
                     <tr>
                         <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                     </tr>
 
                     <tr>
                         <td align="center">
                             <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee">
                                 <tr>
                                     <td height="2" style="font-size: 2px; line-height: 2px;">&nbsp;</td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
 
                     <tr>
                         <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                     </tr>
 
                     <tr>
                         <td align="center">
                             <table border="0" width="400" align="center" cellpadding="0" cellspacing="0" class="container590">
                                 <tr>
                                     <td align="center" style="color: #888888; font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">    
                                         <div style="line-height: 24px">
                                            Reset Password
                                         </div>
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
 
                     <tr>
                         <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                     </tr>
 
                     <tr>
                         <td align="center">
                             <table border="0" align="center" width="160" cellpadding="0" cellspacing="0" bgcolor="5caad2" style="">
 
                                 <tr>
                                     <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                 </tr>
 
                                 <tr>
                                     <td align="center" style="color: #ffffff; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 26px;">
 
 
                                         <div style="line-height: 26px;width: 100%;">
                                             <a href="${urlWithoutHash}" style="color: #ffffff; text-decoration: none;">Click me to reset</a>
                                         </div>
                                     </td>
                                 </tr>
 
                                 <tr>
                                     <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                 </tr>
 
                             </table>
                         </td>
                     </tr>
 
 
                 </table>
 
             </td>
         </tr>
     
         <tr class="hide">
             <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
         </tr>
         <tr>
             <td height="40" style="font-size: 40px; line-height: 40px;">&nbsp;</td>
         </tr>
 
     </table>
     `;
  },
};

Meteor.startup(() => {
  process.env.MAIL_URL =
    "smtp://postmaster@mail.onlayn.al:97367d095ba035cf35aa18b11f2637dc-c4d287b4-552b8c1f@smtp.eu.mailgun.org:587";
});
