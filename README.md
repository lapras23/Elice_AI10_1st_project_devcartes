## 📄 Elice AI Track 10기 1차 프로젝트 (2024.04.29 ~ 2024.05.10)

## 🖼️ 포트폴리오 MVP 만들기

## 🥰 Dev.cartes! (최우수상 수상)

<img src="https://raw.githubusercontent.com/lapras23/Elice_AI10_1st_project_devcartes/main/uploads/240522%20awards.png" alt="award" width="500"/>

## 📝 API 문서, ERD

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

- mongoose sequence plugin을 이용한 AutoIncrement
  - [관련 코드](https://github.com/lapras23/Elice_AI10_1st_project_devcartes/blob/main/models/schemas/comment.js)
  - [블로그 정리 글](https://lapras23.tistory.com/2)
- mongoose에서 findOne 사용 시 원하는 필드 값만 가져오기
  - [관련 코드](https://github.com/lapras23/Elice_AI10_1st_project_devcartes/blob/main/routes/auth.js#L194-L198)
  - [블로그 정리 글](https://lapras23.tistory.com/3)
- Optional Chaining (?.)
  - [관련 코드](https://github.com/lapras23/Elice_AI10_1st_project_devcartes/blob/main/routes/auth.js#L194-L198)
  - [블로그 정리 글](https://lapras23.tistory.com/4)
- Number와 parseInt의 차이
  - [관련 코드](https://github.com/lapras23/Elice_AI10_1st_project_devcartes/blob/main/routes/board.js#L374-L378)
  - [블로그 정리 글](https://lapras23.tistory.com/5)
- 외부 변수를 객체의 key 값으로 넣는 법
  - [관련 코드](https://github.com/lapras23/Elice_AI10_1st_project_devcartes/blob/main/routes/board.js#L321-L346)
  - [블로그 정리 글](https://lapras23.tistory.com/6)

## 🐤 참고

- 프로젝트 전체 코드가 아닌, 제가 작성한 코드가 포함되어 있는 파일만 올렸습니다.
