# 중간 프로젝트 주제 예시

중간 프로젝트 진행을 위해, 아래 세 주제 중에서 하나를 선택하시면 됩니다. 아래 요구사항을 똑같이 지킬 필요는 없습니다.

## 주제 1: 프로젝트 관리 서비스

생산성 덕후가 되어 봅시다.

- 최소 요구사항
  - 사용자는 여러 개의 프로젝트를 생성할 수 있습니다.
  - 사용자는 프로젝트 이름을 수정할 수 있습니다.
  - 사용자는 하나의 프로젝트에 여러 개의 작업을 등록하고 완료 표시를 할 수 있습니다
  - 사용자는 작업 페이지에서 작업 이름과 작업에 대한 설명을 수정할 수 있습니다.
  - 사용자는 다른 사용자의 프로젝트나 할 일을 볼 수 없습니다.
- 추가 요구사항
  - 사용자는 작업의 진행 상황을 작업 페이지에서 댓글로 기록해둘 수 있습니다.
  - 사용자는 작업마다 하나의 라벨을 붙일 수 있고, 라벨 목록에서 라벨을 선택해 해당 라벨이 붙은 작업을 검색할 수 있습니다.
  - 사용자는 프로젝트, 작업, 댓글을 삭제할 수 있습니다.

### 페이지 예시

- 홈 페이지
- 회원 가입 페이지
- 로그인 페이지
- 프로젝트 + 작업을 한 눈에 볼 수 있는 페이지
- 작업 페이지
- 작업 수정 페이지
- 라벨 목록 & 검색 페이지

### JSON Server에 미리 생성할 데이터

없음

## 주제 2: 중고 거래 포럼

중고나라를 접수해 봅시다.

- 최소 요구사항
  - 사용자는 제품 카테고리별 게시판에 매물을 등록할 수 있습니다.
  - 사용자는 매물 이름, 매물 이미지 URL, 매물에 대한 설명을 등록할 수 있습니다.
  - 사용자는 매물 정보를 수정할 수 있습니다.
  - 사용자는 매물에 댓글을 달 수 있습니다.
  - 사용자는 게시판에서 10개 단위로 페이지를 넘겨가며 매물을 탐색할 수 있습니다. (pagination)
- 추가 요구사항
  - 사용자는 게시판(혹은 별도의 검색 페이지)에서 검색어를 입력해서, 검색어와 일치하는 매물을 찾을 수 있습니다.
  - 사용자는 본인의 매물이 판매 완료되었을 경우 판매 완료 표시를 할 수 있습니다.

### 페이지 예시

- 카테고리(게시판) 목록 페이지
- 회원 가입 페이지
- 로그인 페이지
- 게시판 페이지
- 게시글 페이지
- 검색 페이지

### JSON Server에 미리 생성할 데이터

- 카테고리(게시판) 목록

## 주제 3: 의류 쇼핑몰

부자가 되어 봅시다.

- 최소 요구사항
  - 사용자는 상품 목록과 상품 이미지를 열람할 수 있습니다.
  - 사용자는 장바구니에 상품을 담거나 장바구니에서 상품을 제거할 수 있습니다.
  - 사용자는 장바구니에 담긴 물품을 주문할 수 있습니다.
  - 사용자는 주문 내역을 확인할 수 있습니다.
- 추가 요구사항
  - 관리자는 상품을 추가/수정/삭제할 수 있습니다.

### 페이지 예시

- 상품 목록 페이지
- 상품 상세 정보 페이지
- 회원 가입 페이지
- 로그인 페이지
- 장바구니 페이지
- 주문 페이지
- 주문 내역 페이지
- 상품 정보 수정 페이지

### JSON Server에 미리 생성할 데이터

- 상품 목록
  - 상품 이름
  - 상품 가격
  - 상품 이미지 URL
  - 상품 상세 정보 텍스트
