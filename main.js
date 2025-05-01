import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";


// Handle file uploads
async function uploadFiles() {
    const files = document.getElementById('fileInput').files;
    const storage = getStorage(app).ref('Downloads/');
    const downloadsContainer = document.getElementById('downloads-container');
  
    for (const file of files) {
      const fileRef = storage.child(file.name);
      await fileRef.put(file);
      const downloadURL = await fileRef.getDownloadURL();
  
      const fileRow = document.createElement('div');
      fileRow.classList.add('file-row');
  
      const fileIcon = document.createElement('div');
      fileIcon.classList.add('file-icon');
      const fileExtension = file.name.split('.').pop();
      fileIcon.innerHTML = `<img src="images/${fileExtension === 'pdf' ? 'pdf-icon.png' : 'image-icon.png'}" alt="${fileExtension.toUpperCase()}" />`;
  
      const fileName = document.createElement('div');
      fileName.classList.add('file-name');
      fileName.textContent = file.name;
  
      const fileDownload = document.createElement('div');
      fileDownload.classList.add('file-download');
      fileDownload.innerHTML = `<img src="images/download-icon.png" alt="Download" style="cursor:pointer;" onclick="startDownload('${downloadURL}')"/>`;
  
      fileRow.appendChild(fileIcon);
      fileRow.appendChild(fileName);
      fileRow.appendChild(fileDownload);
  
      downloadsContainer.appendChild(fileRow);
    }
  }
  
  // Function to start the download
  function startDownload(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  // Check Firebase connection status
  firebase.storage().ref().child('test-connection').getDownloadURL()
    .then((url) => {
      const statusElement = document.getElementById('connection-status');
      statusElement.innerHTML = `<img class="status-icon" src="https://via.placeholder.com/20/00FF00?text=+" alt="Connected"> Connected Successfully`;
    })
    .catch((error) => {
      const statusElement = document.getElementById('connection-status');
      statusElement.innerHTML = `<img class="status-icon" src="https://via.placeholder.com/20/FF0000?text=+" alt="Failed"> Connection failed: ${error.message}`;
    });
  