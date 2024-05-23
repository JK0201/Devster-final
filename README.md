<img src="https://capsule-render.vercel.app/api?type=waving&color=0:16213E,10:0F3460,30:533483,75:5B2A86,100:E94560&height=100&section=header&text=&fontSize=0" width="100%"/>
<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=500&pause=10000&color=58A6FF&center=true&random=false&width=435&lines=Devster v2.0" alt="Typing SVG" />
  </a>
  <p>[ 2023.06.30 - 2023.08.06 ]</p>
  <p>인원 : 6명</p>
  
  [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JK0201/Devster-final)
</div>

## Overview
- Devster v2.0은 Devster v1.0의 문제점을 개선하고 새로운 기능을 추가한 프로젝트입니다. 주요 목표는 성능 향상, 보안 강화, 사용자 경험 개선, 그리고 코드의 유지보수성을 높이는 것입니다. 이를 위해 프론트엔드와 백엔드를 리팩터링하고, 다양한 최신 기술을 도입하여 개발되었습니다.
<br>

## 주요 기술
<div style=display:flex>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/jpa-222222.svg?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/naver cloud platform-%2303C75A.svg?&style=for-the-badge&logo=naver&logoColor=white" />
</div>
<br>

## 나의 역할
  <details>
    <summary><b>DB 설계 및 연동</b></summary>
    <ul>
      <li>MySQL 데이터베이스, 네이버 클라우드 초기 설정 및 연동</li>
      <li>데이터베이스 스키마 설계</li>
    </ul>
  </details>

  <details>
    <summary><b>회원가입/로그인/아이디 비밀번호 찾기</b></summary>
    <ul>
      <li>회원가입 UI/UX디자인 설계 및 구현</li>
      <li>사용자 입력 정보에 대한 필드 유효성 검사 기능 구현</li>
      <li>SHA256알고리즘 Salt를 사용하여 사용자 비밀번호 암호화 및 로그인 검증 기능 구현</li>
      <li>이메일과 핸드폰 인증을 통해 아이디 비밀번호 찾기 기능 구현</li>
    </ul>
  </details>
  
  <details>
    <summary><b>사용자 인증</b></summary>
    <ul>
      <li>JavaScript와 OAuth2.0 인증방식을 사용하여 카카오, 네이버 로그인 기능 구현</li>
      <li>Java Mail Sender 라이브러리를 사용하여 이메일 인증 및 검증 기능 구현</li>
      <li>CoolSms API를 사용하여 핸드폰 인증 및 검증 기능 구현</li>
      <li>공공데이터 사업자등록정보 API를 사용하여 기업회원 사업자등록증 인증 및 검증 기능 구현</li>
    </ul>
  </details>

  <details>
    <summary><b>파일 업로드</b></summary>
    <ul>
      <li>사용자 경험 증진을 위한 Drag&Drop및 미리보기 기능 구현</li>
      <li>파일 크기, 사이즈, 개수, 이미지 확장자 유효성 검사 기능 구현</li>
      <li>파일 업로드시 네이버 클라우드 버킷 저장 기능 구현</li>
    </ul>
  </details>  
  <br>

## 문제점 및 개선안
  <details>
    <summary><b>문제점</b></summary>
    <ul>
      <li>컨트롤러에 모든 기능이 집중되어 있어 코드 유지보수 및 재사용성이 떨어짐</li>
      <li>유효성 검사를 프론트엔드에서만 수행하여 보안 취약점이 존재함</li>
      <li>JavaScript코드가 모듈화 되지 않아 유지 보수 및 가독성이 떨어짐</li>
    </ul>
  </details>

  <details>
    <summary><b>개선안</b></summary>
    <ul>
      <li>컨트롤러 기능 분리 : 서비스 레이어로 기능을 분리하여 코드 유지보수성을 높이고 재사용성을 향상</li>
      <li>유효성 검사 추가 : 서버 측 유효성 검사 추가 및 HTTP status code를 적극 활용하여 에러핸들링 및 보안 강화</li>
      <li>JavaScript 모듈화 : 코드를 모듈화하여 impotr/export를 활용하여 코드 유지보수성, 재사용성, 가독성을 향상</li>
      <li>함수 분리 : 함수를 기능별로 분류하여 코드 유지보수성을 높이고 재사용성을 향상</li>
    </ul>
  </details>  
<br>

## Outro
  <details>
    <summary><b>느낀점</b></summary>
    <ul>
      <li>첫 팀 프로젝트를 진행하면서 협업의 중요성을 절실히 느꼈습니다. 프로젝트 초반에는 역할 분담과 커뮤니케이션이 어려웠지만, 점차 팀원들과의 소통이 원활해 지면서 효율적으로 업무를 진행할 수 있었습니다.</li>
      <li>모듈화를 하지 않아 에러 발생 시 원인을 찾거나 팀원들에게 제가 작성한 코드를 설명하는 데 어려움을 겪는 경우가 많았습니다. 이로 인해 개발 시간이 증가하고 최종 결과물의 퀄리티도 떨어지는 느낌을 강하게 받았습니다. 이를 통해 기능 분리와 레이어 분리의 중요성을 깨달았으며, 앞으로는 이러한 원칙을 준수하여 개발 시간을 단축하고 효율성을 높이는 데 주력하겠습니다.</li>
    </ul>
  </details>
<br>


## 💜 Devster 

![4기 썸네일](https://github.com/kddongkyu/Devster-final/assets/124576045/1fc38e7e-6747-4b76-9aca-ea30c5dca085)

<br><br>
##  🙂 member 

|                                                                                                                                                                                        김동규                                                                                                                                                                                        |                                                                                                                                                                                             권현오                                                                                                                                                                                             |                                                                                                                                                                             김애리                                                                                                                                                                             |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                   자바 코딩 컨벤션 작성<br><br>JWT 구현 및 Spring security 활용<br><br>사용자 인증 구현<br><br>로그인 회원가입 CRUD 구현<br><br>JPA 사용 환경 세팅 및 팀원 교육<br><br>CI / CD 환경 구축 및 세팅<br><br>GIT HUB 관리<br><br>HTTPS 적용 및 서버 세팅                                                                  |                                                                                                                                  채용게시판 백엔드 & 프론트엔드<br>(북마크, SNS공유 기능 개발)<br><br>공지게시판 백엔드<br><br>메인페이지 백엔드 & 프론트엔드                                                                                                                                  |                                                                                                                  요구사항 정의서 작성<br><br>리뷰게시판 crud 및 프론트<br><br>댓글,대댓글 구현<br><br>좋아요 싫어요 구현<br><br>발표 영상 제작                                                                                                                 |
|                                                                                                                                                                                        장수현                                                                                                                                                                                        |                                                                                                                                                                                             김규현                                                                                                                                                                                             |                                                                                                                                                                             정우영                                                                                                                                                                             |
| 피그마로 웹퍼블리싱 및<br>페이지 상세 레이아웃 제작<br><br>요구사항 정의서 작성<br><br>발표 자료 제작<br><br>간트차트 제작 및 일정관리<br><br>FreeBoard 백엔드 로직 개발 및<br>프론트엔드 페이지 구현<br><br>사진 추가/삭제 백엔드 로직 개발 및<br>프론트엔드 구현<br><br>마이페이지 Translate 페이지 프론트엔드 <br>모달창 구현<br><br>페이지별 반응형 사이즈 조절 및 기타 CSS 조절 | 프론트 코딩 컨벤션 작성,<br>프로젝트 폴더 구조화<br><br>피그마 페이지 디자인<br><br>로그인 프론트엔드<br><br>회원가입 프론트엔드<br><br>아이디/비밀번호 찾기 프론트엔드<br><br>Axios Interceptor 구현<br><br>프론트엔드 JWT 토큰 핸들링<br><br>에러핸들링 & toast UI 활용<br><br>Websocket / StompJS 활용<br> 실시간 채팅 구현<br><br>redux 설정 및 store 관리<br><br>각종 프론트엔드 API 구현 | 피그마로 웹퍼블리싱 및<br> 페이지 상세 레이아웃 제작<br><br>마이페이지 프론트엔트 구현<br><br>회원정보 수정 프론트엔드 구현<br><br>회원탈퇴 프론트엔드 구현<br><br>채용정보 북마크 기능 프론트엔드 구현<br><br>이력서 열람/추가/수정/삭제 프론트엔드 구현<br><br>공지사항 열람/추가/수정/삭제 프론트엔드 구현 <br><br>회원 인증 신청/승인/반려 프론트엔드 구현|

<br><br>


## 🚩 프로젝트 소개 


  - Devster는 커리어를 준비하는 프로그래밍 교육기관 학생들이 지식과 경험을 서로 나눌 수 있는 커뮤니티입니다.


교육 과정 수강 중 혹은 수료 이후, 동일 교육기관의 인원들 사이에서 정보 공유의 필요성이 수강생들에 의해 강하게 제기되었습니다. 이러한 요구를 충족시키기 위해, 저희는 Devster를 기획하게 되었습니다.


회원들은 다양한 게시판에서 자신의 의견과 아이디어를 자유럽게 공유할 수 있고, 이력서를 작성하고 관리할 수 있습니다. 이를 통해 엄격한 절차를 통해 인증된 기업회원은 공개된 이력서를 조회하고, 쪽지 기능을 통해 면접이나 테스트를 제안 할 수 있습니다.


또한 학원별 게시판에서는 실시간 채팅 기능을 통해 교육 기관 인증과정을 통과한 회원들은 수업 내용에 대한 질문과 취업 준비에 대한 정보를 교환할 수 있습니다.
  <br>

<details>
  <summary><b> DB 설계</b></summary>

  ## 🖥 ERD ( 전체 )
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/abb075f0-b190-4742-8843-d9f0dedd3b72" align="center">

  ## 🖥 ERD ( 게시판 )
   <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/00a532d6-3372-475f-9e71-1d2695f6f7e8">

  ## 🖥 ERD ( 회원 )
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/e5a987bb-5449-4b57-8ba8-2e08282205b5" align="center">
</details>

<details>
  <summary><b> CI/CD 방법</b></summary>
  <div>
<img src="https://github.com/kddongkyu/Devster-final/assets/124576045/6732cb1f-61bd-4958-85fb-ac5172ae5fba">
  </div>
</details>

<details>
  <summary><b>컨벤션</b></summary>
  <div>
<br/>
    <b>Git</b> <br/>
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/4d0bdd97-28a9-4faa-8d84-a997accfe1d0" align="center" width="48%">
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/01981718-52cd-46eb-823f-81451e69345a" align="center" width="48%">
  </div>
<br/><br/>
   <b>JAVA</b> <br/>
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/b77fb94b-5cc3-409f-9598-13fc8f67f718" align="center" width="48%">
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/1a8179f7-7a76-410b-a0c3-5ab82a232990" align="center" width="48%">
  </div>
  <br/>
   <b>REACT</b> <br/>
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/6c41957b-b8d3-4733-9d34-225674574334" align="center" width="48%">
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/560dc600-9f37-4c5e-a161-88e5ad67e249" align="center" width="48%">
  </div>
</details>

<details>
  <summary><b>기술 소개</b></summary>
  <div>
<br/>
    <b>JWT</b> <br/>
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/eb745824-ce01-449b-96c7-36d329d85c5d" align="center" width="48%">
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/3b604e91-82c1-4281-907a-e576fb10bdd4" align="center" width="48%">
  </div>
<br/>
    <b>Redux</b> <br/>
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/6c0c838c-e715-4909-b935-9395a9e74a1e" align="center" width="48%">
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/f2da4e05-1ac0-4e5f-9a15-f986f0729056" align="center" width="48%">
  </div>
<br/>
<br/>
   <b>Architecture</b> <br/>
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/099d56bd-9389-4960-b63a-8b19936ce1fb" align="center" width="48%">
  <img src="https://github.com/kddongkyu/Devster-final/assets/124576045/65f8d96f-dabe-4820-955e-6b69ff5f7a9f" align="center" width="48%">
  </div>

  <br/>
  </div>
</details>

<br><br>


## ⏳ 프로젝트 일정 및 규모

+ 개발 기간 : 2023.6.30 ~ 2023.8.6
+ 인원 : 6명

  ![KakaoTalk_20230823_154409381_23](https://github.com/kddongkyu/Devster-final/assets/124576045/4ea2a191-b7b1-47b9-b603-847cbadc932c)
  
 <br><br>

## 🔎 페이지 기능
<details>
  <summary><b>🌐 메인페이지</b></summary>
  <div markdown="1">
    <br>
    <p>- 베스트 게시물 (조회수, 좋아요 수 기반) / 각 게시판별 최신 게시글 리스트</p>
    <p>- 메뉴 모달을 통한 빠른 페이지이동 (모든 페이지 헤더에 적용)</p>
    <p>- 학원별 실시간 채팅방 (학원 인증회원 전용 채팅방 / 사진 멀티 업로드, 디테일)</p>
  </div>
</details>

<details>
  <summary><b>🐣 회원가입</b></summary>
  <div markdown="1">
    <br>
    <p>- 일반 / 기업 / 소셜회원 분류</p>
    <p>- 회원사진 업로드 / 수정(리사이즈&크롭)</p>
    <p>- 유효성 검사 / 약관동의</p>
    <p>- 이메일 / 핸드폰 / 사업자등록증 인증</p>
    <p>- 학원검색 기능 (데이터 크롤링)</p>
    <p>- 카카오 지도 API 주소검색</p>
  </div>
</details>

<details>
  <summary><b>🔒 로그인</b></summary>
  <div markdown="1">
    <br>
    <p>- JWT토큰기반 로그인</p>
    <p>- 일반 / 기업회원 로그인</p>
    <p>- 카카오 / 네이버 소셜로그인</p>
  </div>
</details>

<details>
  <summary><b>📄 마이페이지</b></summary>
  <div markdown="1">
    <br>
    <p>- 회원 정보 수정 / 탈퇴</p>
    <p>- 업로드를 통한 회원 인증 (Guest 에서 등급업)</p>
    <p>- 북마크 조회기능 (채용정보 게시 북마크)</p>
    <p>- 이력서 작성 / 수정 / 삭제 / 이력서 공개, 비공개 (일반 회원)</p>
    <p>- 해당 회원 이력서 조회(기업회원)</p>
    <p>- 이력서 영문 번역</p>
    <p>- 쪽지함 (해당 대상에게 쪽지 전송, 답장)</p>
    <p>- 공지사항 등록 / 일반, 기업회원 가입 승인 (관리자 전용)</p>
  </div>
</details>

<details>
  <summary><b>✏️ 게시판</b></summary>
  <div markdown="1">
    <br>
    <p>- 일반회원 전용 게시판 (비회원 / 기업회원은 조회만 가능)</p>
    <p>- 채용정보 게시판 (기업회원 전용 게시판)</p>
    <p>- 학원별 게시판 (해당 학원 인증 회원 게시판)</p>
    <p>- 최신 공지사항</p>
    <p>- 게시글 검색기능</p>
    <p>- 게시글 정렬기능 (최신순 / 조회순 / 인기순)
    <p>- 게시글 쓰기 / 수정 / 삭제 (사진 멀티 업로드)</p>
    <p>- 댓글, 대댓글 쓰기 / 수정 / 삭제</p>
    <p>- 조회수 / 좋아요 수 기반 인기글 등록 (메인페이지에 베스트글 게시)</p>
    <p>- SNS 공유기능</p>
    <p>- 북마크 기능 (채용정보 게시판)</p>
    <p>- 회사 별점 평가기능 (회사후기 게시판)</p>
  </div>
</details>
<br><br>

## 🎥 발표영상 🎥


<div>
<a href="https://youtu.be/NXt0J5pUHhM">
<img src="https://i.ibb.co/YdBrq6M/Kakao-Talk-20230808-164408077-01.png" alt="Kakao-Talk-20230808-164408077-01" border="0">
<br>
</div>
</a>
　　　　　　　<b> 🌞 사진을 클릭하시면 유튜브 동영상으로 이동됩니다 🌞 </b>    



<br><br>

## 🛠 Design 🛠

<br>

<div align="left">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
<img src="https://img.shields.io/badge/toastUI-007FFF?style=for-the-badge&logo=tui&logoColor=white"/>
</div>

<br>

## 🛠 front end 🛠

<br>

<div align="left">
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/> 
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/> 
<img src="https://img.shields.io/badge/stompJS-black?style=for-the-badge"/> 
</div>

<br>


## 🔧 back-end 🔧

<br>
<div align="left">

<img src="https://img.shields.io/badge/spring-%236DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white" />
<img src="https://img.shields.io/badge/java-%23007396.svg?&style=for-the-badge&logo=java&logoColor=white" />
<img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
<img src="https://img.shields.io/badge/gradle-02303A?&style=for-the-badge&logo=gradle&logoColor=white" />
<img src="https://img.shields.io/badge/lombok-red?style=for-the-badge"/>
<img src="https://img.shields.io/badge/JPA-baae85?style=for-the-badge"/>
<img src="https://img.shields.io/badge/MyBatis-black?style=for-the-badge"/>

</div>
<br>

## 🔧 CI / CD 🔧

<br>

<div>
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white" />
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
</div>

<br>

## 🔧 Tools 🔧

<br>


<div align="left">

<img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/naver-%2303C75A.svg?&style=for-the-badge&logo=naver&logoColor=white" />
​
</div>
<br>
<img src="https://capsule-render.vercel.app/api?type=rect&color=0:16213E,10:0F3460,30:533483,75:5B2A86,100:E94560&height=40&section=footer&text=&fontSize=0" width="100%"/>
