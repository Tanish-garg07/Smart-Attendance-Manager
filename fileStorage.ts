export const saveFileData = async (id: string, data: string) => {
  try {
    localStorage.setItem(`file_${id}`, data);
    return true;
  } catch (error) {
    console.error('Error saving file to localStorage:', error);
    return false;
  }
};

export const getFileData = async (id: string): Promise<string | null> => {
  try {
    const data = localStorage.getItem(`file_${id}`);
    return data || null;
  } catch (error) {
    console.error('Error getting file from localStorage:', error);
    return null;
  }
};

export const deleteFileData = async (id: string) => {
  try {
    localStorage.removeItem(`file_${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting file from localStorage:', error);
    return false;
  }
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
