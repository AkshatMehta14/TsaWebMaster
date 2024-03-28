import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import json

load_dotenv()

app = Flask(__name__)
CORS(app)

# Load OpenAI API key from environment variable
openai.api_key = os.getenv("API")

def generate_response(inp):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": inp}
        ],
        max_tokens=600,
    )
    return response["choices"][0]["message"]["content"]

@app.route("/complete", methods=["POST"])
def complete():
    prompt = request.json["prompt"]
    str_json = generate_response(prompt)
    ##print("Received JSON response:", str_json)
    return jsonify(str_json)

if __name__ == "__main__":
    app.run("localhost", 3000)
