window.LOGIN_GUIDES = {
  updatedAt: "2026-09-02",
  helpNumber: "2526",
  services: [
    {
      id: "chatgpt",
      name: "ChatGPT",
      domain: "chatgpt.com",
      url: "https://chatgpt.com/",
      icon: "https://chatgpt.com/favicon.ico",
      description: "ChatGPT 로그인 화면 안내",
      steps: [
        {
          title: "로그인 버튼을 클릭합니다",
          body: "화면 오른쪽 위의 [로그인]을 클릭합니다. 화면 구성에 따라 왼쪽 아래에도 [로그인] 버튼이 보일 수 있습니다.",
          image: "./login-guide-assets/chatgpt/01-login.png"
        },
        {
          title: "Google 계정으로 계속하기를 선택합니다",
          body: "[Google 계정으로 계속하기]를 클릭하면 로그인이 완료됩니다.",
          image: "./login-guide-assets/chatgpt/02-google.png"
        }
      ]
    },
    {
      id: "genspark",
      name: "Genspark",
      domain: "genspark.ai",
      url: "https://www.genspark.ai/",
      description: "Genspark 로그인 화면 안내",
      steps: [
        {
          title: "로그인 버튼을 클릭합니다",
          body: "화면 오른쪽 위의 [로그인]을 클릭합니다.",
          image: "./login-guide-assets/genspark/01-login.png"
        },
        {
          title: "Google로 계속하기를 선택합니다",
          body: "로그인 창에서 [Google로 계속하기]를 클릭합니다.",
          image: "./login-guide-assets/genspark/02-google.png"
        },
        {
          title: "6층 AI존 계정을 선택합니다",
          body: "등록된 계정 중 [6층 AI존 / knocaizone@gmail.com]을 선택하면 로그인이 완료됩니다.",
          image: "./login-guide-assets/genspark/03-account.png",
          warning: "다른 계정이나 [다른 계정 사용]을 선택하지 마세요. 반드시 6층 AI존 계정으로 로그인해야 합니다."
        }
      ]
    },
    {
      id: "gemini",
      name: "Gemini",
      domain: "gemini.google.com",
      url: "https://gemini.google.com/",
      description: "Gemini 로그인 화면 안내",
      steps: []
    },
    {
      id: "notebooklm",
      name: "Gemini Notebook",
      domain: "notebook.google.com",
      url: "https://notebook.google.com/",
      icon: "./asset/gemini_notebook_icon.svg",
      description: "Gemini Notebook 로그인 화면 안내",
      steps: []
    },
    {
      id: "manus",
      name: "Manus",
      domain: "manus.im",
      url: "https://manus.im/",
      description: "Manus 로그인 화면 안내",
      steps: []
    },
    {
      id: "canva",
      name: "Canva",
      domain: "canva.com",
      url: "https://www.canva.com/",
      description: "Canva 로그인 화면 안내",
      steps: []
    },
    {
      id: "lilysai",
      name: "Lilys AI",
      domain: "lilys.ai",
      url: "https://lilys.ai/",
      description: "Lilys AI 로그인 화면 안내",
      steps: [
        {
          title: "무료로 시작하기를 클릭합니다",
          body: "화면 위쪽 또는 중앙의 [무료로 시작하기]를 클릭합니다.",
          image: "./login-guide-assets/lilysai/01-start.png"
        },
        {
          title: "구글 계정으로 시작합니다",
          body: "[구글 계정으로 시작하기]를 클릭하면 로그인이 완료됩니다.",
          image: "./login-guide-assets/lilysai/02-google.png"
        }
      ]
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      domain: "elevenlabs.io",
      url: "https://elevenlabs.io/",
      description: "ElevenLabs 로그인 화면 안내",
      steps: []
    },
    {
      id: "claude",
      name: "Claude",
      domain: "claude.ai",
      url: "https://claude.ai/new",
      description: "Claude 로그인 화면 안내",
      steps: []
    }
  ]
};
