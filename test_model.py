from model_helper import predict
from sys import argv

from text_helper import translate_text




if __name__ == "__main__":
    print(predict(argv[1]))
    # print(translate_text(predict(argv[1])["disease_name"], "te"))
    # print(ollama_out(predict("test2.jpg")["disease_name"]))