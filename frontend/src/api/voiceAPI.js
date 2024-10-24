import axios from "axios";

// elevenLabs 목소리 리스트 가져오기
export const fetchVoiceList = async () => {
  try {
    const response = await axios.get("/api/voices");

    // 응답 데이터에서 voices 배열 추출
    const voices = response.data.voices;

    // voices가 배열인지 확인한 후, category가 "premade"가 아닌 항목만 반환
    if (Array.isArray(voices)) {
      return voices
        .filter(voice => voice.category !== "premade") // "premade" 제외
        .map((voice) => ({
          id: voice.voice_id,
          name: voice.name,
        }));
    } else {
      console.error("Unexpected response format:", response.data);
      return []; // 예상치 못한 데이터 형식일 경우 빈 배열 반환
    }
  } catch (error) {
    console.error("Failed to fetch voice list:", error);
    throw error;
  }
};

export const saveUserSettings = async (settings) => {
  try {
    const response = await axios.post("/api/voice/settings", settings);
    return response.data;
  } catch (error) {
    console.error("Error saving user settings:", error);
    throw error;
  }
};

// 녹음 파일 서버에 업로드하고, ElevenLabs에 추가
export const uploadAndAddVoice = async (formData) => {
  try {
    const response = await axios.post("/api/voice/upload-and-add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to upload and add voice:", error);
    throw error;
  }
};
