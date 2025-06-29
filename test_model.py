from model_helper import predict
from sys import argv




if __name__ == "__main__":
    print(predict(argv[1]))
    # print(ollama_out(predict("test2.jpg")["disease_name"]))