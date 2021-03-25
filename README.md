# javascript study

# 개발자와 공부하는 학생의 차이

- 복잡성을 정복하는 수단을 강구

# 프로그램이 어려운 이유

- 복잡하기 때문
- 모든 프로그램은 변함

# 프로그램이란?

- 컴퓨터에서 실행될 때 특정 작업을 수행하는 일련의 명령어들의 모음

# Lexical grammar

1. control character 제어문자
2. white space 공백문자
3. line terminators 개행문자
4. comments 코멘트
5. keyword 예약어
6. literals 리터럴

# Language element

## statements 문

-

1. 공문, 식문, 제어문, 선언문
2. 단문, 중문

## expression 식

- 하나의 값으로 귀결됌
- 식은 값이다.
  - 값은 저장하지 않으면 메모리에 휘발되어 없어짐

1. 값식, 연산식, 호출식

## identifier 식별자

- 변수는 메모리 주소의 별명
- 변수는 해당 데이터 타입을 갖고 있음

1. 기본형, 참조형

- 값이 복사 primitive
  - undefined , null , boolean , number , string , symbol
- 값이 참조 reference
  - object

2. 변수, 상수

# Flow control

- javascript engine에게 주는 hint

- sync flow를 control
  ![sync flow](./img/img.png)

## sync flow

- 관여할 수 없이 적재되어 있는 메모리의 명령어를 순서대로 실행하는 노이만 머신의 특징을 갖고 있음

## sub flow

![sub flow](./img/img2.png)

### if 문

- 선택 사항
- optionary

- if라는 소문자 keyword
- white space가 n개 이상 올 수 있음
- 가로 다음 식이 옴
- 단문, 중문 둘다 올 수 있음

```js
if (ex) {
	statement;
}
```

### if else 문

- 이지선다
- mandatory

```js
if (true) 3;
else 5;
```
