// Test file to verify file upload functionality
// This can be run in the browser console

// Test function to verify file upload
window.testFileUpload = async (fileInput) => {
  console.log('=== File Upload Test ===');
  
  const file = fileInput.files[0];
  if (!file) {
    console.error('No file selected');
    return;
  }
  
  console.log('Selected file:', {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified
  });
  
  // Create FormData
  const formData = new FormData();
  formData.append('image', file);
  formData.append('language', 'en');
  
  // Log FormData contents
  console.log('FormData entries:');
  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(`${key}:`, {
        name: value.name,
        size: value.size,
        type: value.type
      });
    } else {
      console.log(`${key}:`, value);
    }
  }
  
  try {
    // Test the upload
    const response = await fetch('http://localhost:3000/predict', {
      method: 'POST',
      body: formData
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const data = await response.json();
      console.log('Response data:', data);
    } else {
      const errorText = await response.text();
      console.error('Error response:', errorText);
    }
  } catch (error) {
    console.error('Upload error:', error);
  }
};

console.log('File upload test function loaded.');
console.log('Usage: Select a file in an input element, then call testFileUpload(inputElement)');
