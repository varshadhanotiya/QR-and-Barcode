var a = 0;  //flag variable
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



//barcode

var flag = 0;
  let barcode;
  function generatebarcode()
  {  
      var barinput = document.getElementById("bar-content").value;
      
      if(barinput == null || barinput == "")
      {
          alert("Enter text..");
      }
      else{
          if(flag == 0)
          {
            //let barContentInput = document.getElementById("bar-content");
            function barcode(){
                data = document.querySelector('.input').value;
                JsBarcode('#barcode' , data , {
                  background : '#fff',
                  color : '#000',
                  width:1,
                  height : 100,
                  displayValue : false
              });
            }

                let barCode;
                let barGenerationForm = document.getElementById("bar-generation-form");                

                // Event listener for form submit event
                barGenerationForm.addEventListener("submit", function (event) {

                // Prevent form submission
                event.preventDefault();

                //let barContent = barContentInput.value;
                if (barCode == null) {
                    // Generate code initially
                    barCode = barcode();
                } else {
                    // If code already generated then make 
                    // again using same object
                    //document.getElementById('bardownload').style.display="block";
                    barCode.makeCode(barinput);
                }
          });
                flag++;
               document.getElementById('bardownload').style.display="block";
          }
                else{
                    barCode.makeCode(barinput);
                    document.getElementById('bardownload').style.display="block";
                }
            }
  }


//Download barcode
  function bardownload() {
  const svgElem = document.querySelector('svg')
  const serializer = new XMLSerializer();
  let svgData = serializer.serializeToString(svgElem);
  svgData = '<?xml version="1.0" standalone="no"?>\r\n' + svgData;
  const svgBlob = new Blob([svgData], {
    type: 'image/svg+xml;charset=utf-8',
  });
  let DOMURL = window.URL || window.webkitURL || window;
  const url = DOMURL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const domRect = svgElem.getBBox();
    canvas.width = domRect.width;
    canvas.height = domRect.height;
    ctx.drawImage(img, 0, 0, domRect.width, domRect.height);
    DOMURL.revokeObjectURL(url);

    const imgURI = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

    downloadURI(imgURI ,'barcode.png');
  };
  img.onerror = (e) => {
    console.error('Image not loaded', e);
  };

  img.src = url;
}