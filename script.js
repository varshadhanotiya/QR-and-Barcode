var a = 0;
let qrcode;
function generateqr()
{  
    var qrinput = document.getElementById("qr-content").value;
    
    if(qrinput == null || qrinput == "")
    {
        alert("Enter text..");
    }
    else{
        if(a == 0)
        {
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
        }
}

function downloadURI(url,name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = url;
  document.body.appendChild(link);
  link.click();   
}

function downloadImageURL()
{
  let dataUrl = document.querySelector('#qr-code').querySelector('img').src;
  downloadURI(dataUrl,'QRcode.jpg');
}

function downloadqr()
{
    setTimeout(downloadImageURL(),1000);
}