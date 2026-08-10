window.SERVICE_GUIDES = {
    "generatedAt":  "2026-08-07T16:05:44+09:00",
    "source":  "ai_guidebooks markdown set, 2026-08-07",
    "services":  [
                                                                                                                                                                                                                                       {
                         "id": "chatgpt",
                         "name": "ChatGPT",
                         "display": "ChatGPT / GPT",
                         "title": "ChatGPT / GPT 기능 중심 사용 가이드",
                         "domain": "chatgpt.com",
                         "url": "https://chatgpt.com/",
                         "tone": "#10b981",
                         "role": "질문 답변, 문서 작성, 파일 검토, 조사, 데이터 분석, 이미지 작업, 반복 업무 정리를 돕는 범용 AI 업무 도구",
                         "basis": "2026-08-10",
                         "overview": "ChatGPT는 질문 답변만 하는 도구가 아니라 글쓰기, 파일 검토, 최신 정보 확인, 조사 보고서 작성, 데이터 분석, 이미지 작업, 반복 업무 정리까지 한 화면에서 처리할 수 있는 AI 업무 도구입니다. 처음 쓰는 사람은 “무엇을 하고 싶은지”를 기준으로 기능을 고르면 됩니다.",
                         "hero": "./guidebook-assets/chatgpt_guide_cover.png",
                         "features": [
                             "모델 선택·추론 강도",
                             "질문·글쓰기",
                             "파일 요약·검토",
                             "웹 검색",
                             "조사 보고서 작성",
                             "데이터 분석·차트",
                             "이미지 내용 파악",
                             "이미지 만들기·수정",
                             "업무 공간 정리",
                             "업로드 자료 다시 찾기",
                             "그래프·시각화 만들기",
                             "문서 초안·편집",
                             "맞춤형 챗봇 사용",
                             "외부 서비스 연결",
                             "반복 절차 저장",
                             "간단 대화 / 업무 처리 모드",
                             "알림·정기 작업 예약",
                             "음성 입력·대화"
                         ],
                         "tips": [
                             "처음 요청할 때 목표, 참고 자료, 원하는 결과물 형식을 함께 적습니다.",
                             "파일이나 이미지를 넣을 때는 회사 보안 정책과 개인정보 포함 여부를 먼저 확인합니다.",
                             "최신 정보, 숫자, 법률·정책·계약 관련 내용은 답변의 출처와 원문을 다시 확인합니다."
                         ],
                         "sections": [
                             {
                                 "title": "모델 선택·추론 강도 조절",
                                 "image": "./guidebook-assets/chatgpt_model_quick_slider.png",
                                 "location": "작성창 오른쪽의 모델/강도 버튼을 누른 뒤, 빠른 게이지 또는 고급 메뉴에서 모델과 추론 강도를 선택합니다.",
                                 "when": "답변 속도, 정확도, 문제 해결 깊이를 업무 난이도에 맞게 바꾸고 싶을 때 사용합니다.",
                                 "how": "대부분의 업무는 기본값으로 시작하고, 복잡한 분석·검토·코딩·여러 자료 비교는 더 강한 모델이나 높은 추론 강도를 선택합니다. 단순 문장 수정이나 빠른 확인은 낮은 강도로 충분합니다.",
                                 "steps": [
                                     {
                                         "title": "빠른 게이지로 속도와 깊이를 조절합니다",
                                         "body": "작성창 오른쪽의 현재 강도 버튼을 누르면 작은 게이지가 열립니다. 왼쪽은 더 빠른 응답, 오른쪽은 더 깊게 생각하는 응답에 가깝습니다. 간단한 요약·문장 수정은 낮게, 보고서 검토·복잡한 비교는 높게 둡니다.",
                                         "image": "./guidebook-assets/chatgpt_model_quick_slider.png",
                                         "badge": "클릭할 곳"
                                     },
                                     {
                                         "title": "고급에서 모델을 선택합니다",
                                         "body": "고급 메뉴의 모델 항목에서 사용할 모델을 고릅니다. GPT-5.6 Sol은 공식 문서에서 복잡한 추론과 코딩을 위한 대표 모델로 설명됩니다. GPT-5.5는 화면에 선택지로 보이는 이전 세대 추론형 모델이므로 일반 검토나 비교 작업에 사용할 수 있습니다. o3는 공식 문서에서 수학, 과학, 코딩, 시각 추론, 기술 글쓰기와 지시 이행에 강한 모델로 설명되며, 여러 단계의 분석이 필요한 문제에 적합합니다.",
                                         "image": "./guidebook-assets/chatgpt_model_advanced_models.png",
                                         "badge": "모델 선택"
                                     },
                                     {
                                         "title": "고급에서 추론 강도를 선택합니다",
                                         "body": "고급 메뉴의 추론 강도에서 즉시, 중간, 높음을 선택합니다. 즉시는 빠른 확인이나 간단한 문장 작업에, 중간은 일반 업무와 자료 검토에, 높음은 복잡한 분석·계획·보고서·코딩처럼 정확도와 판단이 중요한 작업에 사용합니다. 높은 강도는 더 오래 걸릴 수 있습니다.",
                                         "image": "./guidebook-assets/chatgpt_model_reasoning_strength.png",
                                         "badge": "강도 선택"
                                     }
                                 ]
                             },
                             {
                                 "title": "질문·글쓰기",
                                 "image": "./guidebook-assets/chatgpt_main.png",
                                 "location": "새 채팅 화면의 입력창에 자연어로 요청합니다.",
                                 "when": "질문 답변, 글쓰기, 요약, 번역, 아이디어 정리처럼 가장 기본적인 업무를 빠르게 처리할 때 사용합니다.",
                                 "how": "처음부터 완벽한 문장을 만들려고 하지 않아도 됩니다. 목표, 대상, 원하는 형식을 적고 결과를 보며 후속 요청으로 다듬으면 됩니다.",
                                 "steps": [
                                     {
                                         "title": "메인 화면에서 입력창을 확인합니다",
                                         "body": "ChatGPT 메인 화면 가운데의 입력창을 클릭합니다. 간단한 질문도 가능하지만 업무용이면 “누구에게 보낼지”, “무슨 목적의 글인지”, “어떤 말투가 좋은지”를 같이 생각해 둡니다.",
                                         "image": "./guidebook-assets/chatgpt_main.png",
                                         "badge": "시작 화면"
                                     },
                                     {
                                         "title": "원하는 결과를 문장으로 입력합니다",
                                         "body": "입력창에 요청 내용을 적습니다. 예시처럼 “신입 직원에게 보낼 교육 안내 메일을 정중한 말투로 작성해 주세요. 제목 3개도 함께 주세요.”처럼 대상, 목적, 말투, 추가 조건을 함께 쓰면 좋습니다.",
                                         "image": "./guidebook-assets/chatgpt_writing_prompt.png",
                                         "badge": "입력할 곳"
                                     },
                                     {
                                         "title": "결과를 확인하고 필요한 형태를 고릅니다",
                                         "body": "답변이 나오면 바로 복사하기 전에 문장 톤, 빠진 내용, 실제 일정·장소처럼 사람이 확인해야 할 부분을 봅니다. 여러 안을 제시한 경우 업무 상황에 맞는 버전을 고르고, “더 공손하게”, “짧게”, “표현을 부드럽게”처럼 이어서 수정 요청합니다.",
                                         "image": "./guidebook-assets/chatgpt_writing_result.png",
                                         "badge": "확인할 곳"
                                     }
                                 ]
                             },
                             {
                                 "title": "파일 요약·검토",
                                 "image": "./guidebook-assets/chatgpt_file_upload_menu.png",
                                 "location": "작성창 왼쪽의 + 버튼을 누르거나 파일을 입력창으로 끌어다 놓아 첨부합니다.",
                                 "when": "PDF, 문서, 엑셀, 텍스트 파일, 이미지 자료를 올려 핵심 내용을 요약하거나 필요한 부분을 검토할 때 사용합니다.",
                                 "how": "파일만 올리는 것보다 “무엇을 확인할지”를 함께 적어야 결과가 정확해집니다. 요약, 위험 문구 확인, 비교, 표 추출처럼 원하는 작업을 분명히 말합니다.",
                                 "steps": [
                                     {
                                         "title": "파일을 첨부하는 방법을 선택합니다",
                                         "body": "작성창 왼쪽의 + 버튼을 누르면 “사진 및 파일 추가” 메뉴가 열립니다. 여기에서 파일을 선택해도 되고, 컴퓨터의 파일을 입력창 위로 끌어다 놓아도 됩니다. 사진 파일도 같은 방식으로 넣을 수 있습니다.",
                                         "image": "./guidebook-assets/chatgpt_file_upload_menu.png",
                                         "badge": "클릭할 곳"
                                     },
                                     {
                                         "title": "파일을 넣고 원하는 요청을 작성합니다",
                                         "body": "파일이 첨부되면 파일명이 입력창 위에 표시됩니다. 그 아래에 “어떤 내용인지 요약해줘”, “핵심 항목을 표로 정리해줘”, “문제될 만한 부분을 찾아줘”처럼 원하는 작업을 적고 전송합니다.",
                                         "image": "./guidebook-assets/chatgpt_file_prompt.png",
                                         "badge": "입력할 곳"
                                     },
                                     {
                                         "title": "결과를 원본과 비교하며 검토합니다",
                                         "body": "ChatGPT가 파일 내용을 요약하거나 정리하면, 중요한 숫자·날짜·고유명사·판단 문구는 원본 파일과 다시 비교합니다. 업무에 바로 쓸 자료라면 “근거가 되는 문장을 같이 표시해 주세요”처럼 추가 확인을 요청하면 좋습니다.",
                                         "image": "./guidebook-assets/chatgpt_file_result.png",
                                         "badge": "확인할 곳"
                                     }
                                 ]
                             },
                             {
                                 "title": "업로드 자료 다시 찾기",
                                 "image": "./guidebook-assets/chatgpt_library_list.png",
                                 "location": "메인 화면 왼쪽 사이드바에서 라이브러리를 누릅니다.",
                                 "when": "이전에 올린 파일이나 이미지를 다시 찾거나, 파일에 대해 다시 대화하고 관리할 때 사용합니다.",
                                 "how": "라이브러리는 ChatGPT에 올렸던 자료 보관함입니다. 검색, 이미지/파일 필터, 목록 보기, 더보기 메뉴를 사용해 자료를 찾고 관리합니다.",
                                 "steps": [
                                     {
                                         "title": "메인 화면에서 라이브러리로 이동합니다",
                                         "body": "ChatGPT 메인 화면 왼쪽 사이드바에서 “라이브러리”를 클릭합니다. 이전에 업로드한 파일이나 이미지가 어디에 있는지 찾고 싶을 때 이 메뉴를 사용합니다.",
                                         "image": "./guidebook-assets/chatgpt_main.png",
                                         "badge": "시작 화면"
                                     },
                                     {
                                         "title": "검색과 필터로 자료를 찾습니다",
                                         "body": "라이브러리 화면에서 검색창에 파일명이나 키워드를 입력합니다. 전체, 이미지, 파일 탭을 바꿔 보면 원하는 자료를 더 빨리 찾을 수 있습니다. 목록 보기에서는 이름, 수정된 시간, 크기도 함께 확인할 수 있습니다.",
                                         "image": "./guidebook-assets/chatgpt_library_list.png",
                                         "badge": "찾는 곳"
                                     },
                                     {
                                         "title": "더보기 메뉴에서 파일을 관리합니다",
                                         "body": "자료 오른쪽의 “...” 버튼을 누르면 파일에 대해 대화하기, 다운로드하기, 이름 변경, 이동, 삭제 같은 메뉴가 열립니다. 다시 질문하려면 “파일에 대해 대화하기”를 선택하고, 보관이 필요하면 다운로드하거나 이름을 알아보기 쉽게 바꿉니다.",
                                         "image": "./guidebook-assets/chatgpt_library_more_menu.png",
                                         "badge": "관리 메뉴"
                                     }
                                 ]
                             },
                             {
                                 "title": "웹 검색",
                                 "image": "./guidebook-assets/chatgpt_web_search_menu.png",
                                 "location": "작성창의 + 버튼을 누른 뒤 웹 검색을 선택하거나, 채팅에서 웹 검색이 필요하다고 요청합니다.",
                                 "when": "최근 뉴스, 정책, 제품 정보, 시장 동향처럼 최신 정보나 출처가 필요한 내용을 확인할 때 사용합니다.",
                                 "how": "웹 검색은 최신 정보 확인과 출처 확인에 적합합니다. 메뉴에서 켤 수도 있고, “웹 검색해서 찾아줘”, “최신 자료 기준으로 알려줘”처럼 말해도 사용할 수 있습니다.",
                                 "steps": [
                                     {
                                         "title": "+ 버튼에서 웹 검색을 선택합니다",
                                         "body": "작성창 왼쪽의 + 버튼을 누르고 메뉴에서 “웹 검색”을 클릭합니다. 공식 문서 기준으로도 현재 정보가 필요하거나 출처를 확인해야 할 때 ChatGPT에 웹 검색을 사용해 달라고 요청할 수 있습니다.",
                                         "image": "./guidebook-assets/chatgpt_web_search_menu.png",
                                         "badge": "클릭할 곳"
                                     },
                                     {
                                         "title": "찾을 내용과 정리 기준을 작성합니다",
                                         "body": "웹 검색 표시가 붙은 상태에서 찾고 싶은 내용을 작성합니다. 예시처럼 “최근 6개월 내로 새로 나온 AI 서비스들을 찾고 날짜 기준으로 정렬하여 목록화해줘.”처럼 기간, 대상, 정리 방식을 같이 적으면 결과를 검토하기 쉽습니다.",
                                         "image": "./guidebook-assets/chatgpt_web_search_prompt.png",
                                         "badge": "요청 작성"
                                     },
                                     {
                                         "title": "검색 결과와 출처를 함께 검토합니다",
                                         "body": "답변이 나오면 표나 요약만 보지 말고 날짜, 서비스명, 출처 표시를 함께 확인합니다. 최신 정보는 바뀔 수 있으므로 중요한 내용은 출처 링크를 열어 원문 날짜와 맥락을 다시 확인합니다.",
                                         "image": "./guidebook-assets/chatgpt_web_search_result.png",
                                         "badge": "확인할 곳"
                                     }
                                 ]
                             },
                             {
                                 "title": "깊이 있는 조사 보고서",
                                 "image": "./guidebook-assets/chatgpt_deep_research_menu.png",
                                 "location": "작성창 왼쪽의 + 버튼을 누른 뒤 심층 리서치를 선택합니다.",
                                 "when": "여러 자료를 찾아 비교하고, 근거가 있는 보고서 형태로 정리해야 할 때 사용합니다.",
                                 "how": "웹 검색이 빠른 확인용이라면, 심층 리서치는 자료 수집과 분석 과정을 거쳐 보고서 구조로 정리하는 기능입니다. 주제, 참고할 자료 범위, 보고서 형식을 구체적으로 적는 것이 좋습니다.",
                                 "steps": [
                                     {
                                         "title": "+ 버튼에서 심층 리서치를 선택합니다",
                                         "body": "작성창 왼쪽의 + 버튼을 누르고 메뉴에서 “심층 리서치”를 클릭합니다. 단순 검색이 아니라 여러 자료를 찾아 비교하고 보고서 형태로 정리해야 할 때 사용합니다.",
                                         "image": "./guidebook-assets/chatgpt_deep_research_menu.png",
                                         "badge": "클릭할 곳"
                                     },
                                     {
                                         "title": "조사 주제와 보고서 조건을 작성합니다",
                                         "body": "조사할 주제, 참고할 자료 범위, 결과물 형식을 함께 적습니다. 예시처럼 “KNOC가 지금까지 진행한 사업에 대해 모두 찾아 리포트 형식으로 정리해줘. 뉴스와 공식 홈페이지 자료만 참고해줘.”처럼 범위와 출처 기준을 명확히 쓰면 좋습니다.",
                                         "image": "./guidebook-assets/chatgpt_deep_research_prompt.png",
                                         "badge": "요청 작성"
                                     },
                                     {
                                         "title": "리서치 진행 과정을 확인합니다",
                                         "body": "심층 리서치가 시작되면 수집, 분류, 분석, 최종 문서 작성 같은 진행 단계가 표시됩니다. 진행 중에는 필요한 경우 요청을 보완할 수 있고, 완료 후에는 출처와 핵심 근거가 실제 내용과 맞는지 확인합니다.",
                                         "image": "./guidebook-assets/chatgpt_deep_research_progress.png",
                                         "badge": "진행 확인"
                                     }
                                 ]
                             },
                             {
                                 "title": "데이터 분석·차트",
                                 "image": "./guidebook-assets/chatgpt_data_analysis.png",
                                 "location": "파일을 첨부한 뒤 분석 목표와 기준 열을 알려 줍니다.",
                                 "when": "CSV, 엑셀, 표 데이터를 요약하고 추세·이상치·상관관계·차트를 확인할 때 사용합니다.",
                                 "how": "분석 결과의 숫자와 그래프는 원본 데이터와 한 번 대조해야 합니다.",
                                 "steps": [
                                     "엑셀이나 CSV 파일을 첨부합니다. 데이터가 여러 시트에 있으면 어떤 시트를 볼지 함께 말합니다.",
                                     "“월별 추세를 그래프로 보여 주세요”, “전년 대비 증감률을 계산해 주세요”, “이상치 후보를 찾아 주세요”처럼 분석 기준을 입력합니다.",
                                     "답변에 나온 합계, 평균, 비율, 차트 기준을 원본 파일과 비교하고 필요한 경우 계산식을 다시 요청합니다."
                                 ]
                             },
                             {
                                 "title": "이미지 내용 파악",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "작성창의 파일 추가 버튼으로 이미지를 첨부합니다.",
                                 "when": "스크린샷, 사진, 표 이미지, 디자인 시안을 올려 내용을 읽거나 문제점을 설명하게 할 때 사용합니다.",
                                 "how": "이미지에서 봐야 할 위치와 원하는 결과를 함께 지정해야 엉뚱한 해석을 줄일 수 있습니다.",
                                 "steps": [
                                     "스크린샷이나 사진 파일을 첨부합니다. 여러 장을 올릴 때는 “1번 이미지는 현재 화면, 2번 이미지는 목표 화면”처럼 구분합니다.",
                                     "“빨간 박스 부분의 오류 원인을 설명해 주세요”, “이 안내문에서 사용자가 헷갈릴 부분을 찾아 주세요”처럼 볼 위치를 적습니다.",
                                     "결과를 확인할 때는 이미지에 없는 내용을 추측하지 않았는지, 실제 화면의 텍스트를 제대로 읽었는지 확인합니다."
                                 ]
                             },
                             {
                                 "title": "이미지 만들기·수정",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "작성창의 파일 추가 메뉴에서 이미지 만들기를 선택하거나 이미지 생성 요청을 입력합니다.",
                                 "when": "교육자료, 카드뉴스, 안내 이미지, 배너, 예시 화면 등 시각 자료 초안을 만들거나 수정할 때 사용합니다.",
                                 "how": "목적, 비율, 포함할 문구, 제외할 요소, 참고 이미지를 구체적으로 주는 것이 중요합니다.",
                                 "steps": [
                                     "작성창의 “파일 등 추가” 버튼을 누르고 “이미지 만들기”를 선택합니다. 기존 이미지를 수정하려면 참고 이미지를 먼저 첨부합니다.",
                                     "“16:9 교육 슬라이드용”, “텍스트는 넣지 말기”, “공공기관 안내문처럼 단정하게”처럼 용도와 스타일을 적습니다.",
                                     "생성된 이미지는 확대해서 글자 깨짐, 부정확한 로고, 어색한 사물, 저작권 문제가 될 요소가 없는지 확인합니다."
                                 ]
                             },
                             {
                                 "title": "그래프·시각화 만들기",
                                 "image": "./guidebook-assets/chatgpt_data_analysis.png",
                                 "location": "작성창의 파일 추가 메뉴에서 시각화를 선택하거나, “그래프로 보여 주세요”처럼 요청합니다.",
                                 "when": "복잡한 정보나 데이터를 차트, 지도, 다이어그램, 계산기, 인터랙티브 설명으로 보고 싶을 때 사용합니다.",
                                 "how": "보여 줄 데이터, 비교 기준, 사용자가 조절해야 할 입력값을 함께 말하면 좋습니다.",
                                 "steps": [
                                     "작성창의 “파일 등 추가” 버튼을 누르고 “무엇이든 시각화하세요”를 선택합니다.",
                                     "“부서별 처리 건수를 막대그래프로 보여 주세요”, “변수 값을 조절할 수 있는 계산기로 만들어 주세요”처럼 시각화 형태를 지정합니다.",
                                     "완성된 시각화는 축 이름, 단위, 범례, 필터가 실제 데이터 의미와 맞는지 확인합니다."
                                 ]
                             },
                             {
                                 "title": "문서 초안·편집",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "ChatGPT Work에서 파일을 첨부하거나 결과물 형식을 지정해 요청합니다.",
                                 "when": "보고서, 발표자료, 표, PDF 요약본처럼 검토 가능한 업무 산출물을 만들고 여러 번 다듬을 때 사용합니다.",
                                 "how": "초안 생성 후 바로 배포하지 말고 구조, 사실, 문체, 빠진 항목을 단계적으로 수정해야 합니다.",
                                 "steps": [
                                     "Work 모드에서 “8쪽 발표자료 초안”, “1페이지 보고서”, “비교표가 있는 문서”처럼 만들 파일의 종류를 말합니다.",
                                     "참고 파일과 작성 기준을 첨부하고 “검토 가능한 초안으로 만들어 주세요”라고 요청합니다.",
                                     "결과를 확인한 뒤 “2쪽 근거를 보강해 주세요”, “표 제목을 더 명확히 바꿔 주세요”처럼 특정 부분을 지목해 수정합니다."
                                 ]
                             },
                             {
                                 "title": "업무 공간 정리",
                                 "image": "./guidebook-assets/chatgpt_projects.png",
                                 "location": "왼쪽 사이드바의 프로젝트 영역에서 새 프로젝트를 만들거나 기존 프로젝트를 선택합니다.",
                                 "when": "한 업무의 채팅, 파일, 지침을 묶어 장기간 같은 맥락으로 작업할 때 사용합니다.",
                                 "how": "Projects는 업무별 폴더처럼 생각하면 됩니다. 프로젝트마다 파일과 지침을 모아 두면 같은 맥락으로 계속 작업할 수 있습니다.",
                                 "steps": [
                                     "왼쪽 사이드바의 프로젝트 영역에서 “새 프로젝트”를 누르거나 기존 프로젝트를 선택합니다.",
                                     "프로젝트 안에 관련 파일과 설명을 넣고, 필요한 경우 “이 프로젝트에서는 공공기관 보고서 말투를 사용해 주세요” 같은 지침을 적습니다.",
                                     "새 업무를 시작할 때 해당 프로젝트 안에서 채팅을 열면 이전 파일과 지침을 이어서 활용할 수 있습니다."
                                 ]
                             },
                             {
                                 "title": "맞춤형 챗봇 사용·만들기",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "GPT 탐색 화면에서 GPT를 선택하거나 내 GPT 화면에서 만들기를 누릅니다.",
                                 "when": "특정 목적에 맞게 만들어진 GPT를 사용하거나, 반복 업무용 맞춤 GPT를 만들 때 사용합니다.",
                                 "how": "GPTs는 목적별로 설정된 ChatGPT입니다. 번역, 검토, 교육자료 작성처럼 반복되는 업무에 맞춰 쓸 수 있습니다.",
                                 "steps": [
                                     "GPTs 또는 GPT 탐색 화면을 열고 원하는 목적의 GPT를 찾습니다. 예를 들어 문서 검토, 번역, 교육자료 작성용 GPT를 선택할 수 있습니다.",
                                     "반복 업무가 있다면 “만들기”를 눌러 역할, 지침, 답변 형식을 설정합니다.",
                                     "GPT가 기대와 다르게 답하면 지침을 더 구체화하고, 민감한 자료는 외부 GPT에 넣기 전에 회사 정책을 확인합니다."
                                 ]
                             },
                             {
                                 "title": "외부 서비스 연결",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "왼쪽 사이드바의 플러그인 메뉴에서 필요한 플러그인을 검색하고 설치 또는 연결합니다.",
                                 "when": "Gmail, Google Drive, GitHub, Slack 같은 외부 서비스와 연결해 자료를 읽거나 업무 흐름을 이어갈 때 사용합니다.",
                                 "how": "연결 권한은 서비스별로 다르므로 어떤 데이터에 접근하는지 확인해야 합니다.",
                                 "steps": [
                                     "왼쪽 사이드바에서 “플러그인”을 누르고 필요한 서비스를 검색합니다.",
                                     "목록에서 플러그인을 열어 설명을 읽고, 필요하면 “연결” 또는 설치 버튼을 누릅니다.",
                                     "채팅에서 연결한 도구 이름과 작업을 함께 말합니다. 예를 들어 “연결된 드라이브 자료를 찾아 요약해 주세요”처럼 요청하고 권한 범위를 확인합니다."
                                 ]
                             },
                             {
                                 "title": "반복 업무 절차 저장",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "Skills 화면에서 검색하거나 만들기 버튼으로 새 스킬을 작성합니다.",
                                 "when": "매번 같은 절차로 처리하는 업무를 재사용 가능한 작업 방식으로 저장하고 싶을 때 사용합니다.",
                                 "how": "Skills는 반복 업무 매뉴얼을 ChatGPT가 참고하도록 저장하는 기능에 가깝습니다.",
                                 "steps": [
                                     "플러그인 화면 상단 또는 별도 Skills 화면에서 “스킬”을 선택합니다.",
                                     "기존 스킬을 검색하거나 “만들기”를 눌러 반복 업무의 절차를 작성합니다.",
                                     "새 채팅에서 해당 업무를 요청하면 ChatGPT가 스킬 지침에 맞춰 같은 순서와 형식으로 결과를 만들 수 있습니다."
                                 ]
                             },
                             {
                                 "title": "간단 대화 / 업무 처리 모드",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "작성창 위 또는 주변의 Chat / Work 전환 버튼을 사용합니다.",
                                 "when": "간단한 질문은 Chat으로, 파일·플러그인·여러 단계가 필요한 결과물 제작은 Work로 나눠 사용할 때 필요합니다.",
                                 "how": "Work는 시간이 걸리는 업무와 검토 가능한 산출물에 더 적합합니다.",
                                 "steps": [
                                     "새 채팅 화면에서 “Chat”과 “Work” 전환 버튼을 확인합니다.",
                                     "짧은 설명, 번역, 아이디어 정리는 Chat을 선택합니다. 보고서, 발표자료, 파일 분석, 반복 업무는 Work를 선택합니다.",
                                     "Work에서 작업을 맡길 때는 결과물 기준, 참고 자료, 멈춰서 확인받아야 할 지점을 함께 적습니다."
                                 ]
                             },
                             {
                                 "title": "알림·정기 작업 예약",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "왼쪽 사이드바의 예약 메뉴에서 작업을 만들거나 채팅에서 예약을 요청합니다.",
                                 "when": "특정 시간에 알림을 받거나, 정기적으로 같은 확인·조사·업데이트를 반복할 때 사용합니다.",
                                 "how": "반복 작업은 언제 실행할지, 무엇을 확인할지, 보고 기준을 명확히 써야 합니다.",
                                 "steps": [
                                     "왼쪽 사이드바에서 “예약”을 누릅니다. 예약 작업 화면에서 활성 작업과 새 작업 입력창을 확인합니다.",
                                     "“매주 월요일 오전 9시에 AI 뉴스 중 공공기관 관련 내용을 요약해 주세요”처럼 시간, 반복 주기, 확인 범위를 입력합니다.",
                                     "처음 몇 번의 실행 결과를 확인하고 너무 넓거나 부족하면 조건, 출처, 보고 형식을 수정합니다."
                                 ]
                             },
                             {
                                 "title": "음성 입력·대화",
                                 "image": "./guidebook-assets/chatgpt_overview.png",
                                 "location": "작성창 오른쪽의 받아쓰기 또는 Voice 버튼을 사용합니다.",
                                 "when": "키보드 입력이 불편할 때 말로 아이디어를 정리하거나, 음성으로 긴 요청을 입력할 때 사용합니다.",
                                 "how": "업무 자료를 음성으로 말할 때는 주변 소음과 민감 정보 노출에 주의해야 합니다.",
                                 "steps": [
                                     "작성창 오른쪽의 “받아쓰기 시작” 또는 “Voice 시작” 버튼을 확인합니다. 마이크 권한이 필요할 수 있습니다.",
                                     "말로 요청할 때는 “먼저 요약하고, 그다음 표로 정리해 주세요”처럼 순서를 짧게 끊어 말합니다.",
                                     "음성으로 입력된 문장을 보내기 전에 이름, 숫자, 고유명사가 잘못 인식되지 않았는지 확인합니다."
                                 ]
                             }
                         ],
                         "sources": [
                             "https://learn.chatgpt.com/docs/use-chatgpt",
                             "https://learn.chatgpt.com/docs/web",
                             "https://learn.chatgpt.com/docs/features",
                             "https://learn.chatgpt.com/docs/projects",
                             "https://learn.chatgpt.com/docs/automations",
                             "https://learn.chatgpt.com/docs/web-search",
                             "https://learn.chatgpt.com/docs/image-inputs",
                             "https://learn.chatgpt.com/docs/image-generation",
                             "https://learn.chatgpt.com/docs/visualizations",
                             "https://learn.chatgpt.com/docs/artifacts-viewer",
                             "https://learn.chatgpt.com/docs/plugins",
                             "https://learn.chatgpt.com/docs/skills-and-plugins",
                             "https://learn.chatgpt.com/docs/models",
                             "https://developers.openai.com/api/docs/models",
                             "https://developers.openai.com/api/docs/guides/reasoning",
                             "https://developers.openai.com/api/docs/models/o3",
                             "https://developers.openai.com/api/docs/guides/reasoning-best-practices",
                             "https://learn.chatgpt.com/docs/prompting",
                             "https://learn.chatgpt.com/docs/deep-research"
                         ]
                     },
                     {
                         "id":  "genspark",
                         "name":  "Genspark",
                         "display":  "Genspark",
                         "title":  "Genspark 기능 중심 사용 가이드",
                         "domain":  "genspark.ai",
                         "url":  "https://www.genspark.ai/",
                         "tone":  "#eab308",
                         "role":  "조사, 문서, 슬라이드, 표를 한 번에 묶어 만드는 에이전트형 작업 공간",
                         "basis":  "2026-08-07",
                         "overview":  "조사부터 문서, 슬라이드, 표, 이미지, 영상까지 여러 결과물을 한 번에 만들 때 적합하다. 단일 챗봇보다 에이전트형 업무 공간에 가깝다.",
                         "hero":  "./guidebook-assets/genspark_home.png",
                         "features":  [
                                          "Super Agent",
                                          "AI Slides",
                                          "AI Sheets",
                                          "AI Docs",
                                          "AI Image",
                                          "AI Video",
                                          "AI Music",
                                          "Genspark Design",
                                          "Hub",
                                          "Custom Agent",
                                          "GenTeam",
                                          "SecondBrain"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "Super Agent",
                                              "image":  "./guidebook-assets/genspark_home.png",
                                              "location":  "홈 입력창에 목표와 결과물 형식을 적어 작업을 시작한다.",
                                              "when":  "리서치, 문서, 표, 슬라이드가 섞인 복합 업무에 쓴다.",
                                              "how":  "요청에 \u0027출처 포함\u0027, \u0027표로 요약\u0027, \u0027슬라이드까지 생성\u0027처럼 산출물을 명시한다."
                                          },
                                          {
                                              "title":  "AI Slides",
                                              "image":  "./guidebook-assets/genspark_slides.png",
                                              "location":  "AI Slides를 선택하고 주제, 자료, 원하는 발표 흐름을 입력한다.",
                                              "when":  "보고서 발표, 교육자료, 제안서 프레젠테이션 초안에 쓴다.",
                                              "how":  "생성 후 제목, 메시지, 근거 자료를 반드시 검토한다."
                                          },
                                          {
                                              "title":  "AI Sheets",
                                              "image":  "./guidebook-assets/genspark_sheets.png",
                                              "location":  "파일을 올리거나 수집할 데이터 조건을 주고 표 분석을 요청한다.",
                                              "when":  "데이터 정리, 리드 리스트, 시장 비교표, 차트 생성에 쓴다.",
                                              "how":  "외부에서 수집된 데이터는 출처와 최신성을 확인한다."
                                          },
                                          {
                                              "title":  "AI Docs",
                                              "image":  "./guidebook-assets/genspark_home.png",
                                              "location":  "AI Docs에서 문서 목적, 독자, 형식을 입력한다.",
                                              "when":  "기획서, 보고서, 브리핑 문서, 회의 후속 문서 작성에 쓴다.",
                                              "how":  "초안 생성 후 회사 문체와 용어로 다시 다듬는다."
                                          },
                                          {
                                              "title":  "AI Image/Video/Music",
                                              "image":  "./guidebook-assets/genspark_home.png",
                                              "location":  "원하는 이미지, 영상, 음악의 용도와 분위기를 프롬프트로 설명한다.",
                                              "when":  "마케팅 시안, 발표 보조 이미지, 숏폼 초안, 배경음악이 필요할 때 쓴다.",
                                              "how":  "상업적 배포 전 브랜드/저작권 기준을 확인한다."
                                          },
                                          {
                                              "title":  "Genspark Design",
                                              "image":  "./guidebook-assets/genspark_home.png",
                                              "location":  "디자인 목적을 입력해 웹사이트, 포스터, 프로토타입, 마케팅 자산을 만든다.",
                                              "when":  "디자인 초안과 내부 검토용 시각 자료 제작에 적합하다.",
                                              "how":  "최종 디자인은 회사 브랜드 가이드에 맞게 조정한다."
                                          },
                                          {
                                              "title":  "Hub",
                                              "image":  "./guidebook-assets/genspark_home.png",
                                              "location":  "관련 파일과 생성물을 프로젝트 단위로 모아 관리한다.",
                                              "when":  "여러 차례 이어지는 조사/제안/콘텐츠 제작 업무에 쓴다.",
                                              "how":  "프로젝트별 자료 이름과 버전을 정리해 둔다."
                                          },
                                          {
                                              "title":  "Custom Agent",
                                              "image":  "./guidebook-assets/genspark_home.png",
                                              "location":  "반복 업무 규칙을 입력해 전용 에이전트를 만든다.",
                                              "when":  "정기 리포트, 같은 형식의 조사, 반복 콘텐츠 제작에 쓴다.",
                                              "how":  "처음에는 작은 작업으로 테스트한 뒤 팀에 공유한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://www.genspark.ai/helpcenter",
                                         "https://www.genspark.ai/helpcenter/super-agent",
                                         "https://www.genspark.ai/helpcenter/ai-slides",
                                         "https://www.genspark.ai/helpcenter/ai-sheets",
                                         "https://www.genspark.ai/helpcenter/ai-docs",
                                         "https://www.genspark.ai/helpcenter/genspark-design"
                                     ]
                     },
                     {
                         "id":  "lilysai",
                         "name":  "Lilys AI",
                         "display":  "LilysAI",
                         "title":  "LilysAI 기능 중심 사용 가이드",
                         "domain":  "lilys.ai",
                         "url":  "https://lilys.ai/",
                         "tone":  "#14b8a6",
                         "role":  "영상, PDF, 웹페이지, 오디오를 빠르게 읽고 근거 중심으로 요약하는 도구",
                         "basis":  "2026-08-07",
                         "overview":  "긴 영상, 웹페이지, PDF, 오디오, 책을 빠르게 이해하고 정리할 때 적합하다. 자료 기반 요약, 인용 확인, 학습자료 생성에 강하다.",
                         "hero":  "./guidebook-assets/lilysai_help_add_source.png",
                         "features":  [
                                          "자료 추가",
                                          "YouTube 요약",
                                          "웹페이지/PDF 요약",
                                          "오디오/영상 요약",
                                          "Lily 채팅",
                                          "Deep Search",
                                          "멀티소스",
                                          "리포트",
                                          "마인드맵",
                                          "인포그래픽",
                                          "퀴즈",
                                          "플래시카드"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "자료 추가",
                                              "image":  "./guidebook-assets/lilysai_help_add_source.png",
                                              "location":  "URL을 붙여넣거나 파일을 업로드해 요약할 소스를 넣는다.",
                                              "when":  "영상, PDF, 웹페이지, 녹음 파일을 빠르게 이해해야 할 때 첫 단계로 쓴다.",
                                              "how":  "자료 유형에 따라 처리 시간이 달라질 수 있다."
                                          },
                                          {
                                              "title":  "YouTube 요약",
                                              "image":  "./guidebook-assets/lilysai_home.png",
                                              "location":  "YouTube 링크를 입력하면 핵심 요약과 타임라인을 확인한다.",
                                              "when":  "웨비나, 강의, 제품 데모, 인터뷰 내용을 빠르게 정리할 때 쓴다.",
                                              "how":  "중요 내용은 타임스탬프를 눌러 원 영상을 확인한다."
                                          },
                                          {
                                              "title":  "웹페이지/PDF 요약",
                                              "image":  "./guidebook-assets/lilysai_help_add_source.png",
                                              "location":  "웹 링크나 PDF를 넣고 핵심 요약, 쉬운 요약, 대화 노트를 전환해 본다.",
                                              "when":  "보고서, 논문, 기사, 매뉴얼을 빠르게 읽을 때 쓴다.",
                                              "how":  "인용이 있는 부분은 원문과 대조한다."
                                          },
                                          {
                                              "title":  "오디오/영상 요약",
                                              "image":  "./guidebook-assets/lilysai_home.png",
                                              "location":  "녹음이나 영상 파일을 업로드해 요약과 주요 구간을 추출한다.",
                                              "when":  "회의 녹음, 교육 영상, 인터뷰 분석에 적합하다.",
                                              "how":  "사내 녹음 파일은 업로드 가능 여부를 먼저 확인한다."
                                          },
                                          {
                                              "title":  "Lily 채팅",
                                              "image":  "./guidebook-assets/lilysai_home.png",
                                              "location":  "요약 결과 화면에서 자료에 대해 추가 질문한다.",
                                              "when":  "특정 발언, 숫자, 주장, 실행 항목을 다시 찾을 때 쓴다.",
                                              "how":  "질문은 \u0027이 자료 안에서만 답해줘\u0027처럼 범위를 좁힌다."
                                          },
                                          {
                                              "title":  "Deep Search",
                                              "image":  "./guidebook-assets/lilysai_home.png",
                                              "location":  "자료가 없는 상태에서 조사 질문을 입력해 관련 자료를 찾는다.",
                                              "when":  "조사 시작 단계에서 참고 자료를 넓게 찾을 때 쓴다.",
                                              "how":  "찾은 자료의 출처와 날짜를 확인한다."
                                          },
                                          {
                                              "title":  "멀티소스",
                                              "image":  "./guidebook-assets/lilysai_multisource.png",
                                              "location":  "여러 자료를 한 프로젝트에 넣고 통합 질문을 한다.",
                                              "when":  "여러 보고서, 영상, 기사 내용을 비교해 하나의 리포트로 만들 때 쓴다.",
                                              "how":  "소스별 관점 차이를 따로 기록한다."
                                          },
                                          {
                                              "title":  "리포트/마인드맵/퀴즈",
                                              "image":  "./guidebook-assets/lilysai_home.png",
                                              "location":  "요약 결과를 리포트, 마인드맵, 인포그래픽, 퀴즈, 플래시카드로 변환한다.",
                                              "when":  "교육자료, 온보딩 자료, 발표 준비에 쓴다.",
                                              "how":  "생성된 학습자료는 원자료와 사실관계를 확인한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://lilys.ai/en/features/",
                                         "https://help.lilys.ai/en/",
                                         "https://help.lilys.ai/en/articles/12469136-deeper-more-accurate-search-with-deep-search"
                                     ]
                     },
                     {
                         "id":  "gemini",
                         "name":  "Gemini",
                         "display":  "Google Gemini",
                         "title":  "Google Gemini 기능 중심 사용 가이드",
                         "domain":  "gemini.google.com",
                         "url":  "https://gemini.google.com/",
                         "tone":  "#60a5fa",
                         "role":  "Google Workspace 안에서 메일, 문서, 표, 회의 업무를 보조하는 AI",
                         "basis":  "2026-08-07",
                         "overview":  "Google Workspace와 함께 쓰는 업무 AI가 필요할 때 적합하다. Gmail, Docs, Sheets, Slides, Drive, Meet 등에서 문서/메일/표/회의 업무를 바로 도와준다.",
                         "hero":  "./guidebook-assets/gemini_help.png",
                         "features":  [
                                          "Gemini 앱 채팅",
                                          "파일 업로드",
                                          "Deep Research",
                                          "Canvas",
                                          "이미지/영상/음악 생성",
                                          "학습 도구",
                                          "Gmail",
                                          "Docs",
                                          "Sheets",
                                          "Slides",
                                          "Drive",
                                          "Meet"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "Gemini 앱 채팅",
                                              "image":  "./guidebook-assets/gemini_help.png",
                                              "location":  "Gemini 앱 입력창에 질문이나 업무 요청을 입력한다.",
                                              "when":  "빠른 초안, 요약, 번역, 아이디어 정리에 쓴다.",
                                              "how":  "원하는 톤과 결과 형식을 같이 적는다."
                                          },
                                          {
                                              "title":  "파일 업로드/분석",
                                              "image":  "./guidebook-assets/gemini_help.png",
                                              "location":  "파일을 첨부하고 문서 내용에 대해 질문한다.",
                                              "when":  "Drive 문서, PDF, 표 자료를 읽고 핵심을 파악할 때 쓴다.",
                                              "how":  "민감 자료는 회사 정책을 확인한다."
                                          },
                                          {
                                              "title":  "Deep Research",
                                              "image":  "./guidebook-assets/gemini_deep_research.png",
                                              "location":  "조사 주제와 원하는 보고서 형식을 입력한다.",
                                              "when":  "시장 조사, 경쟁 분석, 정책/기술 변화 정리에 쓴다.",
                                              "how":  "생성된 출처와 날짜를 확인한다."
                                          },
                                          {
                                              "title":  "Canvas",
                                              "image":  "./guidebook-assets/gemini_canvas.png",
                                              "location":  "Canvas를 열어 문서나 앱 형태의 결과물을 편집한다.",
                                              "when":  "긴 문서 초안, 구조화된 글쓰기, 반복 수정이 필요한 작업에 쓴다.",
                                              "how":  "문단별로 구체적인 수정 요청을 한다."
                                          },
                                          {
                                              "title":  "이미지/영상/음악 생성",
                                              "image":  "./guidebook-assets/gemini_help.png",
                                              "location":  "만들 콘텐츠의 목적, 스타일, 사용 위치를 설명한다.",
                                              "when":  "발표 보조 이미지, 캠페인 시안, 영상/음악 초안에 쓴다.",
                                              "how":  "외부 공개 전 권리와 브랜드 기준을 검토한다."
                                          },
                                          {
                                              "title":  "Gmail의 Gemini",
                                              "image":  "./guidebook-assets/gemini_help.png",
                                              "location":  "Gmail 사이드패널에서 메일 요약, 초안, 답장을 요청한다.",
                                              "when":  "긴 메일 스레드 파악과 빠른 답장 작성에 쓴다.",
                                              "how":  "전송 전 수신자, 첨부, 표현을 직접 확인한다."
                                          },
                                          {
                                              "title":  "Docs/Sheets/Slides의 Gemini",
                                              "image":  "./guidebook-assets/gemini_help.png",
                                              "location":  "각 앱의 Gemini 사이드패널에서 현재 문서, 표, 슬라이드를 기준으로 요청한다.",
                                              "when":  "보고서 작성, 데이터 정리, 발표자료 초안 제작에 쓴다.",
                                              "how":  "AI가 삽입한 내용은 원본 자료와 대조한다."
                                          },
                                          {
                                              "title":  "Drive/Meet의 Gemini",
                                              "image":  "./guidebook-assets/gemini_help.png",
                                              "location":  "Drive에서는 파일을 찾고 요약하며, Meet에서는 회의 내용을 정리한다.",
                                              "when":  "문서가 많은 프로젝트와 회의 후속 정리에 쓴다.",
                                              "how":  "공유 권한과 회의 기록 정책을 확인한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://support.google.com/gemini/?hl=en",
                                         "https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop\u0026hl=en",
                                         "https://support.google.com/gemini/answer/15719111?co=GENIE.Platform%3DDesktop\u0026hl=en",
                                         "https://workspace.google.com/solutions/ai/"
                                     ]
                     },
                     {
                         "id":  "notebooklm",
                         "name":  "NotebookLM",
                         "display":  "Gemini Notebook / NotebookLM",
                         "title":  "Gemini Notebook / NotebookLM 기능 중심 사용 가이드",
                         "domain":  "notebooklm.google",
                         "url":  "https://notebooklm.google.com/",
                         "tone":  "#6366f1",
                         "role":  "내가 넣은 자료 묶음을 근거로 질문, 보고서, 학습자료를 만드는 소스 기반 노트북",
                         "basis":  "2026-08-07",
                         "overview":  "특정 자료 묶음을 근거로 질문하고 보고서/학습자료를 만들 때 적합하다. 소스 기반 답변, 인용 확인, 오디오/영상 요약, 마인드맵, 슬라이드 생성에 강하다.",
                         "hero":  "./guidebook-assets/notebooklm_help.png",
                         "features":  [
                                          "노트북 생성",
                                          "소스 추가",
                                          "소스 발견",
                                          "소스 기반 채팅",
                                          "인용 확인",
                                          "노트",
                                          "Audio Overview",
                                          "Video Overview",
                                          "Mind Map",
                                          "Reports",
                                          "Flashcards",
                                          "Quizzes",
                                          "Infographic",
                                          "Slide Deck",
                                          "공유"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "노트북 생성",
                                              "image":  "./guidebook-assets/notebooklm_help.png",
                                              "location":  "새 노트북을 만들고 프로젝트 이름을 붙인다.",
                                              "when":  "프로젝트별 자료실을 만들 때 첫 단계로 쓴다.",
                                              "how":  "노트북 이름은 업무명과 기간을 넣어 찾기 쉽게 만든다."
                                          },
                                          {
                                              "title":  "소스 추가/소스 발견",
                                              "image":  "./guidebook-assets/notebooklm_add_sources.png",
                                              "location":  "PDF, 웹사이트, YouTube, Google 문서 등을 소스로 추가하거나 새 소스를 발견한다.",
                                              "when":  "보고서, 회의자료, 교육자료를 한곳에 모을 때 쓴다.",
                                              "how":  "소스가 정확히 들어갔는지 목록을 확인한다."
                                          },
                                          {
                                              "title":  "소스 기반 채팅",
                                              "image":  "./guidebook-assets/notebooklm_help.png",
                                              "location":  "채팅창에서 추가한 소스에 대해 질문한다.",
                                              "when":  "여러 자료 속 공통 주장, 차이점, 근거를 찾을 때 쓴다.",
                                              "how":  "질문에 \u0027소스 안에서만 답해줘\u0027를 붙이면 좋다."
                                          },
                                          {
                                              "title":  "인용 확인",
                                              "image":  "./guidebook-assets/notebooklm_add_sources.png",
                                              "location":  "답변에 붙은 인용을 눌러 원문 위치를 확인한다.",
                                              "when":  "가이드북, 보고서, 교육자료의 근거 확인에 쓴다.",
                                              "how":  "인용이 없는 답변은 보조 의견으로만 취급한다."
                                          },
                                          {
                                              "title":  "노트",
                                              "image":  "./guidebook-assets/notebooklm_help.png",
                                              "location":  "중요 답변이나 아이디어를 노트로 저장한다.",
                                              "when":  "조사 중 발견한 핵심 내용을 모을 때 쓴다.",
                                              "how":  "노트 제목과 태그를 일관되게 만든다."
                                          },
                                          {
                                              "title":  "Audio Overview",
                                              "image":  "./guidebook-assets/notebooklm_audio.png",
                                              "location":  "Studio에서 Audio Overview를 생성해 자료를 들을 수 있는 요약으로 바꾼다.",
                                              "when":  "긴 자료를 이동 중에 빠르게 파악하거나 교육용으로 공유할 때 쓴다.",
                                              "how":  "외부 공유 전 내용과 표현을 검토한다."
                                          },
                                          {
                                              "title":  "Video Overview",
                                              "image":  "./guidebook-assets/notebooklm_help.png",
                                              "location":  "자료 내용을 영상형 요약으로 변환한다.",
                                              "when":  "교육자료나 발표 준비용 개요 영상이 필요할 때 쓴다.",
                                              "how":  "실제 화면 캡처는 회사 계정에서 기능 메뉴를 열어 교체한다."
                                          },
                                          {
                                              "title":  "Mind Map/Reports",
                                              "image":  "./guidebook-assets/notebooklm_help.png",
                                              "location":  "Studio에서 마인드맵이나 리포트를 생성한다.",
                                              "when":  "복잡한 자료를 구조화하거나 보고서 초안을 만들 때 쓴다.",
                                              "how":  "핵심 구조는 직접 검토하고 필요하면 재배열한다."
                                          },
                                          {
                                              "title":  "Flashcards/Quizzes/Infographic/Slide Deck",
                                              "image":  "./guidebook-assets/notebooklm_help.png",
                                              "location":  "자료를 학습카드, 퀴즈, 인포그래픽, 발표자료로 변환한다.",
                                              "when":  "사내 교육, 온보딩, 발표 준비에 쓴다.",
                                              "how":  "시각 산출물은 브랜드 양식에 맞춰 다듬는다."
                                          }
                                      ],
                         "sources":  [
                                         "https://support.google.com/gemininotebook/?hl=en",
                                         "https://support.google.com/gemininotebook/answer/16215270?co=GENIE.Platform%3DDesktop\u0026hl=en",
                                         "https://support.google.com/gemininotebook/answer/16212820?hl=en",
                                         "https://support.google.com/gemininotebook/answer/16757456?hl=en"
                                     ]
                     },
                     {
                         "id":  "claude",
                         "name":  "Claude",
                         "display":  "Claude",
                         "title":  "Claude 기능 중심 사용 가이드",
                         "domain":  "claude.ai",
                         "url":  "https://claude.ai/new",
                         "tone":  "#f59e0b",
                         "role":  "긴 문서 이해, 글쓰기, 논리 검토, 산출물 구조화에 강한 업무 AI",
                         "basis":  "2026-08-07",
                         "overview":  "긴 문서 이해, 논리적 검토, 글쓰기, 구조화된 업무 산출물 제작에 적합하다. Projects와 Artifacts를 활용하면 업무 맥락과 결과물을 함께 관리하기 좋다.",
                         "hero":  "./guidebook-assets/claude_getting_started.png",
                         "features":  [
                                          "채팅",
                                          "파일 업로드",
                                          "파일 생성/편집",
                                          "Artifacts",
                                          "Artifacts 공유",
                                          "Projects",
                                          "Project knowledge",
                                          "Web Search",
                                          "Research",
                                          "Extended Thinking",
                                          "Memory",
                                          "Incognito chats",
                                          "Connectors"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "채팅",
                                              "image":  "./guidebook-assets/claude_getting_started.png",
                                              "location":  "새 채팅에서 업무 요청을 입력한다.",
                                              "when":  "문서 초안, 요약, 번역, 분석, 의사결정 보조에 쓴다.",
                                              "how":  "긴 답변이 필요하면 목표와 형식을 먼저 말한다."
                                          },
                                          {
                                              "title":  "파일 업로드",
                                              "image":  "./guidebook-assets/claude_getting_started.png",
                                              "location":  "문서나 표 파일을 업로드하고 자료 기반 질문을 한다.",
                                              "when":  "계약서, 보고서, 회의자료, 스프레드시트 검토에 쓴다.",
                                              "how":  "민감 자료 업로드 가능 여부를 확인한다."
                                          },
                                          {
                                              "title":  "파일 생성/편집",
                                              "image":  "./guidebook-assets/claude_getting_started.png",
                                              "location":  "원하는 문서, 표, 발표자료, PDF 결과물을 요청한다.",
                                              "when":  "보고서 파일, 분석표, 발표자료 초안을 만들 때 쓴다.",
                                              "how":  "다운로드 전 형식과 내용이 맞는지 확인한다."
                                          },
                                          {
                                              "title":  "Artifacts",
                                              "image":  "./guidebook-assets/claude_artifacts.png",
                                              "location":  "문서, 표, 다이어그램, 대시보드 같은 결과물을 별도 창으로 만든다.",
                                              "when":  "수정이 반복되는 산출물이나 시각화가 필요할 때 쓴다.",
                                              "how":  "오른쪽 Artifact 영역에서 부분 수정 요청을 이어간다."
                                          },
                                          {
                                              "title":  "Artifacts 공유",
                                              "image":  "./guidebook-assets/claude_artifacts.png",
                                              "location":  "완성된 Artifact를 공유하거나 게시한다.",
                                              "when":  "팀원이 결과물을 확인하거나 재사용해야 할 때 쓴다.",
                                              "how":  "외부 공개 전 회사 자료와 개인정보가 없는지 확인한다."
                                          },
                                          {
                                              "title":  "Projects",
                                              "image":  "./guidebook-assets/claude_projects.png",
                                              "location":  "프로젝트를 만들고 관련 채팅, 자료, 지침을 넣는다.",
                                              "when":  "고객사, 제품, 캠페인처럼 장기 업무를 관리할 때 쓴다.",
                                              "how":  "프로젝트 지침에 문체와 금지 표현을 넣는다."
                                          },
                                          {
                                              "title":  "Project knowledge",
                                              "image":  "./guidebook-assets/claude_projects.png",
                                              "location":  "프로젝트 자료를 지식 베이스로 추가한다.",
                                              "when":  "같은 자료를 반복 참조하며 답변해야 할 때 쓴다.",
                                              "how":  "오래된 자료가 섞이지 않게 정리한다."
                                          },
                                          {
                                              "title":  "Web Search/Research",
                                              "image":  "./guidebook-assets/claude_getting_started.png",
                                              "location":  "최신 자료가 필요한 질문에서 웹 검색이나 조사 작업을 요청한다.",
                                              "when":  "시장 조사, 경쟁 분석, 정책 변화 확인에 쓴다.",
                                              "how":  "출처와 날짜를 반드시 확인한다."
                                          },
                                          {
                                              "title":  "Memory/Incognito/Connectors",
                                              "image":  "./guidebook-assets/claude_getting_started.png",
                                              "location":  "기억이 필요한 업무는 일반 대화, 남기지 않을 대화는 Incognito를 사용한다. 연결 기능은 승인된 도구만 연결한다.",
                                              "when":  "개인화된 반복 업무와 민감한 일회성 검토를 구분할 때 쓴다.",
                                              "how":  "외부 도구 연결은 회사 보안 기준을 따른다."
                                          }
                                      ],
                         "sources":  [
                                         "https://support.anthropic.com/en/articles/8114491-getting-started-with-claude",
                                         "https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them",
                                         "https://support.anthropic.com/en/articles/9517075-what-are-projects",
                                         "https://support.anthropic.com/en/articles/12111783-create-and-edit-files-with-claude"
                                     ]
                     },
                     {
                         "id":  "hixai",
                         "name":  "HIX AI",
                         "display":  "HIX.AI",
                         "title":  "HIX.AI 기능 중심 사용 가이드",
                         "domain":  "hix.ai",
                         "url":  "https://hix.ai/home",
                         "tone":  "#8b5cf6",
                         "role":  "글쓰기, 리서치, 발표자료, 웹 문장 보조를 묶은 올인원 작업 도구",
                         "basis":  "2026-08-07",
                         "overview":  "글쓰기, 리서치, 발표자료, 이미지, 영상, 웹 문장 보조가 필요할 때 적합하다. 브라우저 확장을 통해 Gmail, Google Docs, 웹페이지 위에서도 바로 쓸 수 있다.",
                         "hero":  "./guidebook-assets/hix_home.png",
                         "features":  [
                                          "AI Chat",
                                          "Deep Research",
                                          "AI Writer",
                                          "AI Article Writer",
                                          "AI Slides",
                                          "AI Image",
                                          "AI Video",
                                          "Ask AI",
                                          "AI Translator",
                                          "Browser Extension",
                                          "Gmail/Google Docs 보조",
                                          "PDF/웹/YouTube 요약"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "AI Chat/Ask AI",
                                              "image":  "./guidebook-assets/hix_home.png",
                                              "location":  "홈 입력창이나 Ask AI에서 질문한다.",
                                              "when":  "빠른 답변, 문장 초안, 아이디어 정리에 쓴다.",
                                              "how":  "원하는 언어와 형식을 함께 지정한다."
                                          },
                                          {
                                              "title":  "Deep Research",
                                              "image":  "./guidebook-assets/hix_deep_research.png",
                                              "location":  "조사 주제와 보고서 구성을 입력한다.",
                                              "when":  "시장 조사, 경쟁사 비교, 정책/기술 리서치에 쓴다.",
                                              "how":  "출처와 사실관계를 검토한다."
                                          },
                                          {
                                              "title":  "AI Writer",
                                              "image":  "./guidebook-assets/hix_home.png",
                                              "location":  "문서 목적, 독자, 톤, 길이를 입력해 초안을 만든다.",
                                              "when":  "블로그, 이메일, 보도자료, 안내문, 기획서 초안에 쓴다.",
                                              "how":  "회사 용어와 문체로 재수정한다."
                                          },
                                          {
                                              "title":  "AI Article Writer",
                                              "image":  "./guidebook-assets/hix_home.png",
                                              "location":  "주제와 참고 기준을 입력해 긴 글 초안을 만든다.",
                                              "when":  "콘텐츠 마케팅, 사내 지식문서, 설명글 작성에 쓴다.",
                                              "how":  "근거 없는 주장과 과장 표현을 제거한다."
                                          },
                                          {
                                              "title":  "AI Slides",
                                              "image":  "./guidebook-assets/hix_ai_slides.png",
                                              "location":  "텍스트, 문서, URL, 이미지에서 발표자료를 만든다.",
                                              "when":  "보고서 발표, 교육자료, 영업 제안 초안에 쓴다.",
                                              "how":  "생성된 슬라이드 메시지를 회사 관점으로 정리한다."
                                          },
                                          {
                                              "title":  "AI Image/AI Video",
                                              "image":  "./guidebook-assets/hix_home.png",
                                              "location":  "원하는 장면, 스타일, 비율, 목적을 입력한다.",
                                              "when":  "마케팅 시안, 썸네일, 숏폼 초안 제작에 쓴다.",
                                              "how":  "브랜드와 저작권 기준을 확인한다."
                                          },
                                          {
                                              "title":  "Browser Extension",
                                              "image":  "./guidebook-assets/hix_home.png",
                                              "location":  "확장을 설치한 뒤 웹페이지, PDF, Gmail, Google Docs에서 사이드바를 연다.",
                                              "when":  "웹 자료 요약, 이메일 작성, 문서 수정에 쓴다.",
                                              "how":  "확장 설치는 회사 보안 기준에 맞춰 진행한다."
                                          },
                                          {
                                              "title":  "번역/요약/문장 개선 도구",
                                              "image":  "./guidebook-assets/hix_home.png",
                                              "location":  "도구 목록에서 번역, 요약, 패러프레이즈, 문법 검사를 선택한다.",
                                              "when":  "짧은 문장 다듬기와 다국어 업무에 쓴다.",
                                              "how":  "의미가 바뀌지 않았는지 원문과 비교한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://hix.ai/",
                                         "https://hix.ai/deep-research",
                                         "https://hix.ai/ai-writer",
                                         "https://hix.ai/ai-slides",
                                         "https://hix.ai/browser-extension"
                                     ]
                     },
                     {
                         "id":  "inlineai",
                         "name":  "inline AI",
                         "display":  "Inline AI",
                         "title":  "Inline AI 기능 중심 사용 가이드",
                         "domain":  "inline-ai.com",
                         "url":  "https://www.inline-ai.com/",
                         "tone":  "#06b6d4",
                         "role":  "로컬 PC 문서, 표, PDF, 이미지, 폴더를 직접 읽고 정리하는 파일 중심 AI",
                         "basis":  "2026-08-07",
                         "overview":  "로컬 PC 안의 Excel, Word, PowerPoint, PDF, 이미지, 폴더를 AI가 직접 읽고 정리해야 할 때 적합하다. 웹 AI보다 로컬 파일 중심 업무에 특화되어 있다.",
                         "hero":  "./guidebook-assets/inline_home.png",
                         "features":  [
                                          "로컬 파일 작업",
                                          "Excel 편집",
                                          "Word/PPT 읽기와 수정 보조",
                                          "PDF 읽기",
                                          "이미지 정보 추출",
                                          "폴더 검색",
                                          "여러 파일 통합",
                                          "웹+로컬 자료 조사",
                                          "변경 전 승인"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "로컬 파일 작업",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "앱에서 작업할 파일이나 폴더를 지정하고 자연어로 요청한다.",
                                              "when":  "회사 PC에 있는 자료를 업로드 없이 정리해야 할 때 쓴다.",
                                              "how":  "실제 메뉴 화면은 설치 후 회사 계정 화면으로 교체 캡처가 필요하다."
                                          },
                                          {
                                              "title":  "Excel 편집",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "Excel 파일을 대상으로 정리, 계산, 표 구조 변경을 요청한다.",
                                              "when":  "매출표, 정산표, 취합표를 빠르게 정리할 때 쓴다.",
                                              "how":  "AI가 바꾼 셀과 수식은 저장 전 검토한다."
                                          },
                                          {
                                              "title":  "Word/PPT/PDF 읽기",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "문서 파일을 열어 요약, 비교, 문장 수정, 발표자료 검토를 요청한다.",
                                              "when":  "보고서와 제안서 검토, PPT 문구 정리에 쓴다.",
                                              "how":  "원본 파일은 백업해 둔다."
                                          },
                                          {
                                              "title":  "이미지 정보 추출",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "영수증, 사진, 이미지 문서에서 표나 텍스트를 추출한다.",
                                              "when":  "비용 정산, 자료 취합, 현장 사진 기록 정리에 쓴다.",
                                              "how":  "인식 오류가 생길 수 있으므로 원본과 대조한다."
                                          },
                                          {
                                              "title":  "폴더 검색/여러 파일 통합",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "폴더를 지정하고 여러 파일의 정보를 하나의 표로 모으게 한다.",
                                              "when":  "여러 영수증, 계약서, PDF, 엑셀 자료를 취합할 때 쓴다.",
                                              "how":  "파일명 규칙과 정리 기준을 명확히 말한다."
                                          },
                                          {
                                              "title":  "웹+로컬 자료 조사",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "로컬 파일과 웹 자료를 함께 참고해 결과 파일을 만들게 한다.",
                                              "when":  "내부 자료와 공개 자료를 함께 비교해야 할 때 쓴다.",
                                              "how":  "외부 자료의 출처와 사내 자료의 공개 가능 범위를 구분한다."
                                          },
                                          {
                                              "title":  "변경 전 승인",
                                              "image":  "./guidebook-assets/inline_home.png",
                                              "location":  "AI가 제안한 변경사항을 확인하고 적용 여부를 결정한다.",
                                              "when":  "실수로 원본 파일이 바뀌는 것을 막을 때 중요하다.",
                                              "how":  "저장 전 변경 내역과 파일 위치를 확인한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://www.inline-ai.com/en/",
                                         "https://www.youtube.com/@inlineai",
                                         "https://www.youtube.com/watch?v=FP7xyheevsY"
                                     ]
                     },
                     {
                         "id":  "canva",
                         "name":  "Canva",
                         "display":  "Canva",
                         "title":  "Canva 기능 중심 사용 가이드",
                         "domain":  "canva.com",
                         "url":  "https://www.canva.com/",
                         "tone":  "#00c4cc",
                         "role":  "디자인 경험이 적어도 발표자료, 카드뉴스, 문서, 영상 시안을 만드는 제작 도구",
                         "basis":  "2026-08-07",
                         "overview":  "디자인 전문 인력이 아니어도 발표자료, 문서, 포스터, SNS 콘텐츠, 영상, 웹페이지를 빠르게 만들어야 할 때 적합하다. 템플릿과 AI 디자인 보조, 브랜드 관리에 강하다.",
                         "hero":  "./guidebook-assets/canva_features.png",
                         "features":  [
                                          "템플릿",
                                          "편집기",
                                          "프레젠테이션",
                                          "Docs",
                                          "Whiteboards",
                                          "Video Editor",
                                          "웹사이트",
                                          "PDF/PPT 변환",
                                          "공유/협업",
                                          "Brand Kit",
                                          "Magic Write",
                                          "Magic Media",
                                          "Magic Design",
                                          "Magic Video",
                                          "배경 제거"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "템플릿",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "홈에서 만들 콘텐츠 유형을 고르고 템플릿을 검색한다.",
                                              "when":  "발표자료, 포스터, 카드뉴스, 보고서 표지 초안에 쓴다.",
                                              "how":  "템플릿은 회사 브랜드에 맞게 색상과 폰트를 바꾼다."
                                          },
                                          {
                                              "title":  "편집기",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "좌측 패널에서 텍스트, 요소, 이미지, 배경, 페이지를 편집한다.",
                                              "when":  "기존 디자인을 빠르게 수정하거나 새 자료를 만들 때 쓴다.",
                                              "how":  "페이지 구조가 복잡하면 요소를 그룹화한다."
                                          },
                                          {
                                              "title":  "프레젠테이션/Docs",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "프레젠테이션이나 Docs 형식을 선택해 내용을 작성한다.",
                                              "when":  "제안서, 교육자료, 시각형 문서에 쓴다.",
                                              "how":  "내보내기 전 폰트 깨짐과 페이지 흐름을 확인한다."
                                          },
                                          {
                                              "title":  "Whiteboards",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "화이트보드에서 스티키 노트, 도형, 플로우를 배치한다.",
                                              "when":  "브레인스토밍, 로드맵, 회의 워크숍에 쓴다.",
                                              "how":  "회의 후 핵심 결론을 별도 페이지로 정리한다."
                                          },
                                          {
                                              "title":  "Video Editor",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "영상 템플릿에 클립, 텍스트, 음악, 애니메이션을 넣는다.",
                                              "when":  "간단한 홍보 영상, 교육 영상, SNS 영상에 쓴다.",
                                              "how":  "자막과 화면비를 배포 채널에 맞춘다."
                                          },
                                          {
                                              "title":  "Magic Write",
                                              "image":  "./guidebook-assets/canva_magic_write.png",
                                              "location":  "문서나 디자인 안에서 AI 글쓰기 기능을 실행한다.",
                                              "when":  "제목, 설명문, 발표 대본, 카드뉴스 문구를 만들 때 쓴다.",
                                              "how":  "생성 문구는 사실 확인과 톤 조정을 거친다."
                                          },
                                          {
                                              "title":  "Magic Media",
                                              "image":  "./guidebook-assets/canva_magic_media.png",
                                              "location":  "텍스트로 이미지, 그래픽, 영상을 생성한다.",
                                              "when":  "디자인에 넣을 보조 이미지나 시안 제작에 쓴다.",
                                              "how":  "실제 제품/인물과 혼동되지 않게 표시한다."
                                          },
                                          {
                                              "title":  "Magic Design/Magic Video",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "프롬프트나 업로드 미디어를 바탕으로 디자인/영상을 생성한다.",
                                              "when":  "빠른 콘셉트 시안과 캠페인 초안 제작에 쓴다.",
                                              "how":  "선택한 결과를 브랜드 양식으로 다듬는다."
                                          },
                                          {
                                              "title":  "Brand Kit/Brand Templates",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "로고, 색상, 폰트, 공용 템플릿을 저장해 적용한다.",
                                              "when":  "팀 전체 디자인 일관성을 유지할 때 쓴다.",
                                              "how":  "브랜드 자산은 승인된 최신 버전만 사용한다."
                                          },
                                          {
                                              "title":  "공유/다운로드",
                                              "image":  "./guidebook-assets/canva_features.png",
                                              "location":  "공유 버튼으로 협업자를 초대하거나 파일 형식을 선택해 다운로드한다.",
                                              "when":  "팀 검토, 외부 제출, 인쇄/영상 배포에 쓴다.",
                                              "how":  "외부 공유 링크 권한을 확인한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://www.canva.com/features/",
                                         "https://www.canva.com/help/editing-designing/",
                                         "https://www.canva.com/help/use-magic-write/",
                                         "https://www.canva.com/help/using-magic-media/",
                                         "https://www.canva.com/help/brand-kit/"
                                     ]
                     },
                     {
                         "id":  "capcut",
                         "name":  "CapCut",
                         "display":  "CapCut",
                         "title":  "CapCut 기능 중심 사용 가이드",
                         "domain":  "capcut.com",
                         "url":  "https://www.capcut.com/",
                         "tone":  "#111827",
                         "role":  "컷 편집, 자막, 숏폼, 교육 영상 제작에 쓰는 영상 편집 도구",
                         "basis":  "2026-08-07",
                         "overview":  "영상 편집, 자막, 숏폼, 홍보 영상, 교육 영상 제작에 적합하다. 요청 조건상 데스크톱 앱 중심으로 설명하며, 컷 편집과 AI 자막/음성/배경 제거가 강점이다.",
                         "hero":  "./guidebook-assets/capcut_desktop.png",
                         "features":  [
                                          "새 프로젝트",
                                          "미디어 가져오기",
                                          "타임라인 편집",
                                          "트림/분할/크롭",
                                          "텍스트",
                                          "자동 캡션",
                                          "템플릿",
                                          "전환/필터/효과",
                                          "오디오",
                                          "키프레임",
                                          "Chroma key",
                                          "배경 제거",
                                          "Text to Speech",
                                          "Voice changer",
                                          "노이즈 제거",
                                          "AutoCut",
                                          "Export"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "새 프로젝트/미디어 가져오기",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "CapCut Desktop에서 New Project를 누르고 영상, 이미지, 오디오를 Import한다.",
                                              "when":  "모든 영상 편집의 시작 단계다.",
                                              "how":  "파일 위치와 원본 해상도를 확인한다."
                                          },
                                          {
                                              "title":  "타임라인 편집",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "미디어를 타임라인에 놓고 잘라내기, 분할, 순서 변경을 한다.",
                                              "when":  "긴 영상을 짧게 정리하거나 핵심 클립을 만들 때 쓴다.",
                                              "how":  "컷마다 소리와 화면 연결이 자연스러운지 확인한다."
                                          },
                                          {
                                              "title":  "트림/크롭/리사이즈",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "클립 길이, 화면 크기, 화면비를 배포 채널에 맞춘다.",
                                              "when":  "가로 영상, 세로 숏폼, 발표 삽입 영상 변환에 쓴다.",
                                              "how":  "자막과 얼굴이 잘리지 않는지 확인한다."
                                          },
                                          {
                                              "title":  "텍스트/자동 캡션",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "텍스트 메뉴나 자동 캡션 기능으로 자막을 만든다.",
                                              "when":  "교육 영상, 인터뷰, 숏폼 접근성 개선에 쓴다.",
                                              "how":  "자동 자막은 고유명사와 숫자를 직접 수정한다."
                                          },
                                          {
                                              "title":  "템플릿/효과/전환",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "템플릿, 필터, 전환, 스티커, 효과를 선택해 적용한다.",
                                              "when":  "짧은 홍보 영상이나 SNS용 시안을 빠르게 만들 때 쓴다.",
                                              "how":  "회사 영상은 과한 효과보다 가독성을 우선한다."
                                          },
                                          {
                                              "title":  "오디오/음악/노이즈 제거",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "음악, 효과음, 노이즈 제거, 음성 향상 기능을 적용한다.",
                                              "when":  "녹음 품질 개선과 배경음악 삽입에 쓴다.",
                                              "how":  "음악 사용 권한을 확인한다."
                                          },
                                          {
                                              "title":  "Text to Speech/AI Voice",
                                              "image":  "./guidebook-assets/capcut_text_to_speech.png",
                                              "location":  "텍스트를 입력하고 목소리를 선택해 내레이션을 만든다.",
                                              "when":  "제품 소개, 교육자료, 빠른 더미 내레이션 제작에 쓴다.",
                                              "how":  "발음과 억양을 미리듣기로 확인한다."
                                          },
                                          {
                                              "title":  "배경 제거/Chroma key",
                                              "image":  "./guidebook-assets/capcut_background_remover.png",
                                              "location":  "배경 제거 또는 Chroma key로 인물/제품을 분리한다.",
                                              "when":  "발표자 영상 합성, 제품컷 편집, 썸네일 제작에 쓴다.",
                                              "how":  "머리카락/가장자리 품질을 확대해 확인한다."
                                          },
                                          {
                                              "title":  "AutoCut/Long video to shorts",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "긴 영상을 자동으로 짧은 클립으로 변환한다.",
                                              "when":  "웨비나, 행사 영상, 인터뷰에서 숏폼 소재를 뽑을 때 쓴다.",
                                              "how":  "자동 선택된 장면의 맥락이 끊기지 않는지 검토한다."
                                          },
                                          {
                                              "title":  "Export",
                                              "image":  "./guidebook-assets/capcut_desktop.png",
                                              "location":  "Export에서 파일명, 형식, 해상도, 저장 위치를 정한다.",
                                              "when":  "완성 영상을 제출하거나 업로드할 때 마지막 단계로 쓴다.",
                                              "how":  "내보낸 파일을 열어 자막, 음성, 화면비를 최종 확인한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://www.capcut.com/tools/desktop-video-editor",
                                         "https://www.capcut.com/help",
                                         "https://www.capcut.com/tools/text-to-speech",
                                         "https://www.capcut.com/tools/video-background-remover",
                                         "https://www.capcut.com/tools/add-subtitles-to-video"
                                     ]
                     },
                     {
                         "id":  "manus",
                         "name":  "Manus",
                         "display":  "Manus",
                         "title":  "Manus 기능 중심 사용 가이드",
                         "domain":  "manus.im",
                         "url":  "https://manus.im/",
                         "tone":  "#fb7185",
                         "role":  "조사부터 슬라이드, 웹 작업까지 실행하는 에이전트형 AI",
                         "basis":  "2026-08-07",
                         "overview":  "단순 답변보다 실제 작업 실행과 결과물 생성이 필요할 때 적합하다. 조사, 슬라이드, 웹사이트, 디자인, 브라우저 작업, 반복 업무 실행에 강한 에이전트형 AI다.",
                         "hero":  "./guidebook-assets/manus_home.png",
                         "features":  [
                                          "Chat Mode",
                                          "Agent Mode",
                                          "AI Slides",
                                          "AI Website Generator",
                                          "AI Design",
                                          "AI Image",
                                          "AI Music",
                                          "Browser Operator",
                                          "Wide Research",
                                          "Mail Manus",
                                          "Slack Integration",
                                          "Scheduled Tasks",
                                          "Desktop/My Computer"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "Chat Mode",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "간단한 질문이나 빠른 답변은 Chat Mode에서 입력한다.",
                                              "when":  "짧은 설명, 아이디어, 문장 정리에 쓴다.",
                                              "how":  "복합 업무는 Agent Mode로 넘긴다."
                                          },
                                          {
                                              "title":  "Agent Mode",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "목표를 입력하면 Manus가 계획을 세우고 실행한다.",
                                              "when":  "조사, 작성, 디자인, 웹 작업이 섞인 업무에 쓴다.",
                                              "how":  "실행 전 계획과 중간 결과를 확인한다."
                                          },
                                          {
                                              "title":  "AI Slides",
                                              "image":  "./guidebook-assets/manus_slides.png",
                                              "location":  "주제를 입력하면 조사, 구성, 디자인을 거쳐 슬라이드를 만든다.",
                                              "when":  "제안서, 교육자료, 발표 초안 제작에 쓴다.",
                                              "how":  "핵심 메시지와 근거를 검토한다."
                                          },
                                          {
                                              "title":  "AI Website Generator",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "웹사이트 목적, 대상, 필요한 섹션을 입력한다.",
                                              "when":  "내부 공유용 페이지, 캠페인 랜딩 초안, 프로토타입 제작에 쓴다.",
                                              "how":  "회사 배포 전 보안과 브랜드 검토가 필요하다."
                                          },
                                          {
                                              "title":  "AI Design/Image/Music",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "디자인, 이미지, 음악의 용도와 스타일을 입력한다.",
                                              "when":  "시각 시안, 콘텐츠 초안, 발표 보조 자료에 쓴다.",
                                              "how":  "외부 공개 전 권리와 품질을 확인한다."
                                          },
                                          {
                                              "title":  "Browser Operator",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "브라우저 작업을 맡길 때 목적과 접근할 사이트를 명확히 지정한다.",
                                              "when":  "반복 조회, 양식 확인, 웹 기반 자료 수집 보조에 쓴다.",
                                              "how":  "로그인 계정, 개인정보, 외부 제출 작업은 회사 승인 기준을 따른다."
                                          },
                                          {
                                              "title":  "Wide Research",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "넓은 범위의 조사 주제와 결과 형식을 지정한다.",
                                              "when":  "시장/기술/경쟁사 리서치처럼 많은 자료가 필요한 업무에 쓴다.",
                                              "how":  "출처와 조사 범위를 확인한다."
                                          },
                                          {
                                              "title":  "Mail/Slack/Desktop",
                                              "image":  "./guidebook-assets/manus_home.png",
                                              "location":  "메일, Slack, Desktop/My Computer 연결 기능은 필요한 업무에서만 사용한다.",
                                              "when":  "팀 협업, 로컬 파일 활용, 반복 업무 지시에 쓴다.",
                                              "how":  "연결 전에 회사 계정 보안 기준을 확인한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://manus.im/",
                                         "https://manus.im/docs/introduction/welcome",
                                         "https://help.manus.im/en/articles/11711128-what-are-the-differences-between-chat-mode-and-agent-mode",
                                         "https://manus.im/playbook/slide-generator",
                                         "https://manus.im/features/manus-browser-operator",
                                         "https://manus.im/blog/introducing-wide-research"
                                     ]
                     },
                     {
                         "id":  "elevenlabs",
                         "name":  "ElevenLabs",
                         "display":  "ElevenLabs",
                         "title":  "ElevenLabs 기능 중심 사용 가이드",
                         "domain":  "elevenlabs.io",
                         "url":  "https://elevenlabs.io/",
                         "tone":  "#ec4899",
                         "role":  "내레이션, 더빙, 음성 변환, 오디오 편집을 위한 음성 제작 도구",
                         "basis":  "2026-08-07",
                         "overview":  "음성 생성, 더빙, 오디오 편집, 효과음, 음악, 음성 에이전트 제작에 적합하다. 교육 영상, 홍보 영상, 내레이션, 다국어 콘텐츠 업무에 강하다.",
                         "hero":  "./guidebook-assets/elevenlabs_tts.png",
                         "features":  [
                                          "Text to Speech",
                                          "Speech to Text",
                                          "Voice Changer",
                                          "Voice Cloning",
                                          "Voice Design",
                                          "Voice Library",
                                          "Voice Isolator",
                                          "Sound Effects",
                                          "AI Music",
                                          "Dubbing",
                                          "Studio",
                                          "Speech Correction",
                                          "Productions",
                                          "Ads Engine",
                                          "Voice Agents",
                                          "다운로드"
                                      ],
                         "tips":  [
                                      "먼저 업무 목표와 원하는 결과물 형식을 정한다.",
                                      "입력 자료가 있으면 파일, 링크, 이미지, 오디오 등으로 함께 넣는다.",
                                      "AI 결과는 초안으로 보고, 사실/숫자/권리/보안은 직접 확인한다."
                                  ],
                         "sections":  [
                                          {
                                              "title":  "Text to Speech",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "텍스트를 입력하고 음성을 선택해 Generate를 누른다.",
                                              "when":  "교육 영상, 홍보 영상, 안내 음성, 더미 내레이션 제작에 쓴다.",
                                              "how":  "발음이 어색한 단어는 문장을 나누거나 표기를 바꿔 다시 생성한다."
                                          },
                                          {
                                              "title":  "Speech to Text",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "오디오를 텍스트로 변환한다.",
                                              "when":  "녹음 내용 정리, 자막 초안, 스크립트 추출에 쓴다.",
                                              "how":  "고유명사와 숫자는 원음을 듣고 확인한다."
                                          },
                                          {
                                              "title":  "Voice Changer",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "기존 음성을 선택한 목소리 스타일로 바꾼다.",
                                              "when":  "녹음 톤 통일, 캐릭터 음성 초안에 쓴다.",
                                              "how":  "동의 없는 타인 음성 변환은 사용하지 않는다."
                                          },
                                          {
                                              "title":  "Voice Cloning",
                                              "image":  "./guidebook-assets/elevenlabs_voice_cloning.png",
                                              "location":  "허가받은 음성 샘플을 업로드해 목소리를 만든다.",
                                              "when":  "브랜드 내레이터, 교육 강사, 다국어 음성 제작에 쓴다.",
                                              "how":  "음성 권리와 동의를 반드시 확보한다."
                                          },
                                          {
                                              "title":  "Voice Design/Voice Library",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "목소리 특성을 설명하거나 라이브러리에서 적합한 음성을 고른다.",
                                              "when":  "콘텐츠 성격에 맞는 톤을 빠르게 찾을 때 쓴다.",
                                              "how":  "브랜드 이미지와 맞는 음성을 선택한다."
                                          },
                                          {
                                              "title":  "Voice Isolator",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "녹음 파일의 배경 소음과 방해음을 줄인다.",
                                              "when":  "인터뷰, 회의 녹음, 현장 녹음 품질 개선에 쓴다.",
                                              "how":  "완전히 복구되지 않을 수 있으므로 원본 보관이 필요하다."
                                          },
                                          {
                                              "title":  "Sound Effects/AI Music",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "텍스트로 효과음이나 음악을 생성한다.",
                                              "when":  "영상, 팟캐스트, 교육 콘텐츠의 분위기 조성에 쓴다.",
                                              "how":  "배포 전 사용 권리를 확인한다."
                                          },
                                          {
                                              "title":  "Dubbing",
                                              "image":  "./guidebook-assets/elevenlabs_tts.png",
                                              "location":  "영상이나 오디오를 다른 언어 음성으로 변환한다.",
                                              "when":  "다국어 교육자료, 제품 소개 영상 현지화에 쓴다.",
                                              "how":  "번역 정확도와 입 모양/타이밍을 확인한다."
                                          },
                                          {
                                              "title":  "Studio/Speech Correction",
                                              "image":  "./guidebook-assets/elevenlabs_studio.png",
                                              "location":  "스크립트와 타임라인을 편집하고 필요한 부분만 다시 생성한다.",
                                              "when":  "긴 내레이션, 오디오북, 영상 음성 편집에 쓴다.",
                                              "how":  "수정 후 전체 흐름을 다시 들어본다."
                                          },
                                          {
                                              "title":  "다운로드/History",
                                              "image":  "./guidebook-assets/elevenlabs_studio.png",
                                              "location":  "생성 기록에서 원하는 파일 형식으로 내려받는다.",
                                              "when":  "최종 영상 편집툴이나 LMS에 넣을 때 사용한다.",
                                              "how":  "파일명에 프로젝트명, 언어, 버전을 넣어 관리한다."
                                          }
                                      ],
                         "sources":  [
                                         "https://elevenlabs.io/text-to-speech",
                                         "https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech",
                                         "https://elevenlabs.io/voice-cloning",
                                         "https://elevenlabs.io/studio",
                                         "https://help.elevenlabs.io/hc/en-us/articles/26020223217297-How-do-I-download-WAV-M4A-and-FLAC-files"
                                     ]
                     }
                 ]
};