<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# <p align="center">🚀 NestJS AI Assistant – Conversational AI</p>

## Description

NestJS AI Assistant is a powerful chatbot API built with NestJS and Google Gemini AI to provide intelligent, real-time conversations. It supports multi-session chat history, ensuring context-aware interactions.

Features:
- 🌟 Google Gemini AI Integration
- 💬 Multi-session Chat History
- 🚀 Built with NestJS for Scalability
- 🔐 Secure API with Configurable Keys
- 🔄 Easily Extendable for Custom Use Cases

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## API Documentation
### **Chat with AI Assistant**
#### **Endpoint:**
```
POST /ai_assistant/chat
```

#### **Request Headers:**
```json
{
  "Content-Type": "application/json"
}
```

#### **Request Body:**
| Parameter  | Type   | Required | Description |
|------------|--------|----------|-------------|
| `prompt`   | string | ✅ Yes   | The text input for the AI model. |
| `sessionId` | string | ❌ No  | A unique identifier to maintain chat history (optional). |

#### **Example Request:**
```bash
curl -X POST http://localhost:5000/ai_assistant/chat \
-H "Content-Type: application/json" \
-d '{
  "prompt": "What is the capital of Pakistan?",
  "sessionId": "uuid"
}'
```

#### **Example Response:**
```json
{
  "response": "The capital of Pakistan is Islamabad.",
  "sessionId": "uuid"
}
```

#### **Response Details:**
| Parameter   | Type   | Description |
|-------------|--------|-------------|
| `response`  | string | The AI-generated reply. |
| `sessionId` | string | The same session ID (if provided) for tracking conversation history. |

---

## Notes
- The `sessionId` is **optional** but useful for maintaining chat context.
- If `sessionId` is provided, the AI will remember previous prompts and responses.


## 💫 About Me:
I'm Ali Hamza from Pakistan 🇵🇰, an experienced Full Stack Developer. With a comprehensive understanding of both front-end and back-end technologies, I am dedicated to creating strong and reliable software applications that perform well and meet the needs of the users effectively. 💻🚀

## 💻 Tech Stack:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat&logo=nestjs&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=flat&logo=mysql&logoColor=white) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)


## Stay in touch

- Linkedin - [@syedalihamzaofficial](https://www.linkedin.com/in/syedalihamzaofficial/)
- Website - [Ali Hamza](https://syedalihamzaofficial.blogspot.com/)
- Medium - [@syedalihamzaofficial](https://medium.com/@syedalihamzaofficial)
- YouTube - [@TechnicalHamzaOfficial1](https://www.youtube.com/@TechnicalHamzaOfficial1)