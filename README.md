### 패키지 분리 워크스페이스(Workspace)

* **packages/project**: 프로젝트

> `npm`에서는 monorepo의 종속성 관리가 지원되지 않습니다. `yarn`을 사용합니다.
`yarn.lock` 파일은 git 저장소에 commit 하고 팩키지 관리자를 통해서 팩키지 설치 및 관리합니다.

### 명령어

``` bash
# 설치
yarn install

# localhost:3000 서버 실행
yarn project:pc:dev
yarn project:mobile:dev

# 프러덕션 빌드, 실행
yarn project:build
yarn project:start

# 스태틱 생성
yarn project:generate
```

> 프로젝트의 자세한 설명은 `packages/project` 디렉토리의 `README.md`를 참고합니다.
