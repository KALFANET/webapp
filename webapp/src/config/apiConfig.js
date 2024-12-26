let API_URL = 'http://localhost:5001';

// בדיקת קובץ serverConfig.json כדי לקבל את הפורט הדינמי
(async () => {
  try {
    const response = await fetch('/config/serverConfig.json');
    const data = await response.json();
    if (data && data.backendPort) {
      API_URL = `http://localhost:${data.backendPort}`;
    }
  } catch (error) {
    console.error('Failed to fetch serverConfig.json:', error);
  }
})();

export { API_URL };