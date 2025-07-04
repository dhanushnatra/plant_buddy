from gtts import gTTS
from googletrans import Translator

langs = {
    'hindi': 'hi',
    'tamil': 'ta',
    'telugu': 'te',
    'kannada':'kn',
    'bengali': 'bn',
    'gujarati': 'gu',
    'marathi': 'mr',
    'punjabi':  'pa',
}



def translate_text(text, dest_language='english'):
    """
    Translate text to the specified language.
    
    Args:
        text (str): Text to translate.
        dest_language (str): Language code to translate to (default is 'en').
        
    Returns:
        str: Translated text.
    """
    translator = Translator()
    translated = translator.translate(text, dest=langs.get(dest_language, 'en'))
    return translated["text"]

def text_to_speech(text, lang='english'):
    """
    Convert text to speech in the specified language.
    
    Args:
        text (str): Text to convert to speech.
        lang (str): Language code for the speech (default is 'en').
        
    Returns:
        str: Path to the saved audio file.
    """
    tts = gTTS(text=text, lang=langs.get(lang, 'en'), slow=False)
    filename = f"audio_{lang}.mp3"
    tts.save(filename)
    return filename 



if __name__ == "__main__":
    # Example usage
    text = "Hello, how are you?"
    translated_text = translate_text(text, 'hindi')
    print(f"Translated Text: {translated_text}")
    
    audio_file = text_to_speech(translated_text, 'hindi')
    print(f"Audio file saved as: {audio_file}")
    
    # You can play the audio file using any audio player
    # For example, using pygame or any other library