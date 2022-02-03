## 📑 프로젝트
### 👉 증분 컴파일 사용 여부
- "incremental": true

### 👉 프로젝트 컴파일 여부
- "composite": true

### 👉 증분 컴파일 정보를 저장할 파일
- "tsBuildInfoFile": "./"

### 👉 여러 프로젝트 참조 시 선언 파일 대신 소스 파일 사용 여부
- "disableSourceOfProjectReferenceRedirect": true

### 👉 편집 시 프로젝트를 다중 프로젝트 참조 검사에서 제외
- "disableSolutionSearching": true

### 👉 자동으로 로드되는 프로젝트 수 최소화
- "disableReferencedProjectLoad": true

<br>

## 📑 언어 및 환경
### 👉 사용할 특정 ECMAScript 버전 설정
> 'ES3' (기본), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 혹은 'ESNEXT'
- "target": "es5"

### 👉 컴파일에 포함될 라이브러리 파일 목록
- "lib": []

### 👉 JSX 코드 생성 설정
> 'preserve', 'react-native', 혹은 'react'.
- "jsx": "preserve"

### 👉 ES7의 decorators에 대한 실험적 지원 여부
- "experimentalDecorators": true

### 👉 decorator를 위한 타입 메타데이터를 내보내는 것에 대한 실험적 지원 여부
- "emitDecoratorMetadata": true

### 👉 Response JSX 방출 대상 지정 시 사용되는 JSX 공장 함수를 지정합니다(예: 'React.createElement' 또는 'h')
- "jsxFactory": ""

### 👉 타겟팅 JSX에서 방출하는 Fragment에 사용되는 JSX Fragment 참조를 지정합니다(예: 'React).Fragment' 또는 'Fragment'
- "jsxFragmentFactory": ""

### 👉 `jsx: react-jsx*.`를 사용할 때 JSX 팩토리 함수를 가져오는 데 사용되는 모듈 지정자를 지정하십시오.
- "jsxImportSource": ""

### 👉 'createElement'에 대해 호출되는 개체를 지정하십시오. 이는 반응 JSX 방출을 타깃으로 삼을 때만 적용된다.
- "reactNamespace": ""

### 👉 기본 lib.d.ts.를 포함한 모든 라이브러리 파일을 사용할 수 없습니다.
- "noLib": true

### 👉 ECMAScript-standard 호환 클래스 필드를 내보냅니다.
- "useDefineForClassFields": true


<br>

## 📑 모듈
### 👉 모듈을 위한 코드 생성 설정
> 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
- "module": "commonjs"

### 👉 입력 파일의 루트 디렉토리(rootDir) 설정으로 --outDir로 결과 디렉토리 구조를 조작할 때 사용됩니다.
- "rootDir": "./"

### 👉 모듈 해석 방법 설정
> 'node' (Node.js) 혹은 'classic' (TypeScript pre-1.6).
- "moduleResolution": "node"

### 👉 non-absolute한 모듈 이름을 처리할 기준 디렉토리
- "baseUrl": "./"

### 👉 'baseUrl'를 기준으로 불러올 모듈의 위치를 재지정하는 엔트리 시리즈
- "paths": {}

### 👉 결합된 컨텐츠가 런타임에서의 프로젝트 구조를 나타내는 루트 폴더들의 목록
- "rootDirs": []

### 👉 타입 정의를 포함할 폴더 목록, 설정 안 할 시 기본적으로 ./node_modules/@types로 설정
- "typeRoots": []

### 👉 컴파일중 포함될 타입 정의 파일 목록
- "types": []

### 👉 UMD 전역을 모듈에서 접근할 수 있는 지 여부
- "allowUmdGlobalAccess": true

### 👉 .json 파일 가져오기 사용 여부
- "resolveJsonModule": true

### 👉 `'import', 'requires', '<reference>`가 프로젝트에 추가할 파일 수를 확장하는 것을 허용하지 않습니다.
- "noResolve": true

<br>

## 📑 자바스크립트 지원
### 👉 자바스크립트 파일 컴파일 허용 여부
- "allowJs": true

### 👉 .js 파일의 오류 검사 여부
- "checkJs": true

### 👉 'node_modules'에서 JavaScript 파일을 확인하는 데 사용되는 최대 폴더 깊이를 지정합니다. allowJs에만 적용됩니다.
- "maxNodeModuleJsDepth": 1

<br>

## 📑 Emit
### 👉 '.d.ts' 파일 생성 여부.
- "declaration": true

### 👉 각 '.d.ts' 파일의 소스맵 생성 여부.
- "declarationMap": true

### 👉 d.ts 파일만 출력하고 JavaScript 파일은 출력하지 않습니다.
- "emitDeclarationOnly": true

### 👉 '.map' 파일 생성 여부.
- "sourceMap": true

### 👉 단일 파일로 합쳐서 출력합니다.
- "outFile": "./" 

### 👉 해당 디렉토리로 결과 구조를 보냅니다.
- "outDir": "./" 

### 👉 주석 삭제 여부
- "removeComments": true

### 👉 결과 파일 내보낼지 여부
- "noEmit": true

### 👉 'tslib'에서 헬퍼를 가져올 지 여부
- "importHelpers": true

### 👉 타입에만 사용되는 내보내기/확인 동작을 지정합니다.
- "importsNotUsedAsValues": "remove"

### 👉 타겟이 'ES5', 'ES3'일 때에도 'for-of', spread 그리고 destructuring 문법 모두 지원
- "downlevelIteration": true

### 👉 소스 위치 대신 디버거가 알아야 할 TypeScript 파일이 위치할 곳
- "sourceRoot": ""

### 👉 생성된 위치 대신 디버거가 알아야 할 맵 파일이 위치할 곳
- "mapRoot": ""

### 👉 분리된 파일을 가지고 있는 대신, 단일 파일을 소스 맵과 가지고 있을 지 여부
- "inlineSourceMap": true

### 👉 소스맵과 나란히 소스를 단일 파일로 내보낼 지 여부
> '--inlineSourceMap' 혹은 '--sourceMap'가 설정되어 있어야 합니다.
- "inlineSources": true

### 👉 출력 파일의 시작 부분에 UTF-8 바이트 순서 표시(BOM)를 내보냅니다.
- "emitBOM": true

### 👉 파일을 내보낼 새 줄 문자를 설정합니다.
- "newLine": "crlf"

### 👉 JSDoc 주석에 '@internal'이 있는 방출 선언을 비활성화합니다.
- "stripInternal": true

### 👉 컴파일된 출력에서 '__extends'와 같은 사용자 지정 도우미 함수를 생성하는 것을 비활성화합니다.
- "noEmitHelpers": true

### 👉 형식 검사 오류가 보고되면 파일 내보내기를 비활성화합니다.
- "noEmitOnError": true

### 👉 생성된 코드에서 'const enum' 선언을 지웁니다.
- "preserveConstEnums": true

### 👉 생성된 선언 파일의 출력 디렉터리를 지정합니다.
- "declarationDir": "./"

<br>

## 📑 Interop 제약 조건
### 👉 각 파일을 분리된 모듈로 트랜스파일 ('ts.transpileModule'과 비슷합니다).
- "isolatedModules": true

### 👉 default export이 아닌 모듈에서도 default import가 가능하게 할 지 여부
> 해당 설정은 코드 추출에 영향은 주지 않고, 타입확인에만 영향을 줍니다.
- "allowSyntheticDefaultImports": true

### 👉 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부
> 'allowSyntheticDefaultImports'를 암시적으로 승인합니다.
- "esModuleInterop": true

### 👉 symlik의 실제 경로를 처리하지 않을 지 여부
- "preserveSymlinks": true

### 👉 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부
- "forceConsistentCasingInFileNames": true

<br>

## 📑 타입 체킹
### 👉 모든 엄격한 타입-체킹 옵션 활성화 여부
- "strict": true

### 👉 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부
- "noImplicitAny": true

### 👉 엄격한 null 확인 여부
- "strictNullChecks": true

### 👉 함수 타입에 대한 엄격한 확인 여부
- "strictFunctionTypes": true

### 👉 함수에 엄격한 'bind', 'call' 그리고 'apply' 메소드 사용 여부
- "strictBindCallApply": true

### 👉 클래스의 값 초기화에 엄격한 확인 여부
- "strictPropertyInitialization": true

### 👉 'any' 타입으로 구현된 'this' 표현식 에러처리 여부
- "noImplicitThis": true

### 👉 catch 절 변수를 'any' 대신 'unknown'으로 입력합니다.
- "useUnknownInCatchVariables": true

### 👉 strict mode로 분석하고 모든 소스 파일에 "use strict"를 추가할 지 여부
- "alwaysStrict": true

### 👉 true 사용되지 않은 지역 변수에 대한 에러보고 여부
- "noUnusedLocals": true

### 👉 사용되지 않은 파라미터에 대한 에러보고 여부
- "noUnusedParameters": true

### 👉 선택적 속성 유형을 '정의되지 않음'을 추가하는 대신 작성된 대로 해석합니다.
- "exactOptionalPropertyTypes": true

### 👉 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러보고 여부
- "noImplicitReturns": true

### 👉 switch문에서 fallthrough 케이스에 대한 에러보고 여부
- "noFallthroughCasesInSwitch": true

### 👉 인덱스 서명 결과에 '정의되지 않음' 포함
- "noUncheckedIndexedAccess": true

### 👉 파생된 클래스의 재정의 멤버를 재정의 한정자로 표시합니다.
- "noImplicitOverride": true

### 👉 인덱스 형식 */을 사용하여 선언된 키에 인덱스된 접근자를 사용합니다.
- "noPropertyAccessFromIndexSignature": true

### 👉 사용되지 않는 레이블에 대한 오류 보고를 비활성화합니다.
- "allowUnusedLabels": true

### 👉 연결할 수 없는 코드에 대한 오류 보고를 비활성화합니다.
- "allowUnreachableCode": true

<br>

## 📑 완전성
### 👉 정의 파일의 타입 확인을 건너 뛸 지 여부
- "skipLibCheck": true
