/*

let qrContentInput = document.getElementById("qr-content");

    let qrGenerationForm = document.getElementById("qr-generation-form");

    let qrCode;

    function generateQrCode(qrContent) {
      return new QRCode("qr-code", {
        text: qrContent,
        width: 140,
        height: 140,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }

     

    // Event listener for form submit event

    qrGenerationForm.addEventListener("submit", function (event) {

      // Prevent form submission
      event.preventDefault();

      let qrContent = qrContentInput.value;

      if (qrCode == null) {
        // Generate code initially
        qrCode = generateQrCode(qrContent);
      } else {
        // If code already generated then make 
        // again using same object
        qrCode.makeCode(qrContent);
      }
    });


*/

/*
    $(document).ready(function(){
        $("#secondbtn").click(function(){
          $("button").show();
        });
      });
*/




/*

document.querySelector('.downbtn').style.display = 'none'; 
document.querySelector('.genbtn').addEventListener('click', showBtn); 
 
function showBtn(e) { 
 document.querySelector('.downbtn').style.display = 'block'; 
 e.preventDefault(); 
} 
*/



  
  
  var a = 0;
  let qrcode;
  function qrgen()
  {  
      var qrinput = document.getElementById("qr-content").value;
      
      if(document.getElementById("qr-content").value == null || document.getElementById("qr-content").value == "")
      {
          alert("Enter text..");
      }
      else{
          if(a == 0)
          {
            /*
              //qrcode = new QRCode(document.getElementById("qr-code"),document.getElementById("qr-content").value);
              qrcode = new QRCode(document.getElementById("qr-code"), {
              text: document.getElementById("qr-content").value,
              width: 140,
              height: 140,
              colorDark : "#000000",
              colorLight : "#ffffff",
              correctLevel : QRCode.CorrectLevel.H
              });
              a++;
              document.getElementById('qrdownload').style.display="block";
              */

                let qrContentInput = document.getElementById("qr-content");

                let qrGenerationForm = document.getElementById("qr-generation-form");

                let qrCode;

                function generateQrCode(qrContent) {
                return new QRCode("qr-code", {
                    text: qrContent,
                    width: 140,
                    height: 140,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H,
                });
                }

                

                // Event listener for form submit event

                qrGenerationForm.addEventListener("submit", function (event) {

                // Prevent form submission
                event.preventDefault();

                let qrContent = qrContentInput.value;

                if (qrCode == null) {
                    // Generate code initially
                    qrCode = generateQrCode(qrContent);
                } else {
                    // If code already generated then make 
                    // again using same object
                    //document.getElementById('qrdownload').style.display="block";
                    qrCode.makeCode(qrContent);
                }
                });

                a++;
               document.getElementById('qrdownload').style.display="block";
                
            }
                else{
                    qrcode.makeCode(document.getElementById("qr-content").value);
                    document.getElementById('qrdownload').style.display="block";
                }
            }
  }
  

  function downloadqr()
  {
      setTimeout(
          function ()
          {
              let dataUrl = document.querySelector('#qr-code').querySelector('img').src;
              downloadURI(dataUrl,'QRcode.jpg');
          }
         ,1000);
      function downloadURI(url,name) {
          var link = document.createElement("a");
          link.download = name;
          link.href = url;
          document.body.appendChild(link);
          link.click();   
      }
  }



  /*
// download image
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  */
  