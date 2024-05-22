## 📄 Elice AI Track 10기 1차 프로젝트 (2024.04.29 ~ 2024.05.10)

## 🖼️ 포트폴리오 MVP 만들기

## 🥰 Dev.cartes! (최우수상 수상)

![award](https://raw.githubusercontent.com/lapras23/Elice_AI10_1st_project_devcartes/main/uploads/240522%20awards.png)

## API 문서, ERD

<a href="https://docs.google.com/spreadsheets/d/1xZFiT2gpMSSY5c2hOz8VhJL_gC7Prh9ZJ5Q6wfp4Itk/edit?usp=sharing" target="_blank">링크</a>

## ✨ Stack

- Node.js (Express, Passport, Mongoose)
- MongoDB

## 💻 역할 (Back-end)

- 회원가입 (Passport를 이용한 Session 방식)
  - /passport/index.js
  - /passport/strategies/local.js
- 로그인, 로그아웃, 비밀번호 변경, 회원정보 수정, 회원 탈퇴
  - /schemas/user.js
  - /routes/auth.js
- Project, skill MVP
  - /schemas/project.js
  - /schemas/skill.js
  - /routes/project.js
  - /routes/skill.js
- 게시판 목록 전체, 개별 조회, 검색 기능 (닉네임, 제목, 내용, 제목+내용, 댓글)
  - /schemas/board.js
  - /routes/board.js
- mongoose sequence plugin을 이용한 AutoIncrement
  - /schemas

## 🪄 배운 것 정리

- [mongoose sequence plugin을 이용한 AutoIncrement](https://lapras23.tistory.com/2)
- 추후 추가 예정

## 참고

- 제가 작성한 코드가 포함되어 있는 파일만 올렸습니다.
- 코딩 배우고 했던 첫 프로젝트였고, 백엔드는 2주만 배워서 들어간거라 부족한 부분이 많습니다. 이해해주세요🥰
