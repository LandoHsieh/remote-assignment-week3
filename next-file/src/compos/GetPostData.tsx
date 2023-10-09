import React from 'react'

interface PostData {
    question: string
    answer: string
}

const postData: PostData[] = [
    {
        question: "Why do we use Node.js? What does it do?",
        answer: "Node.js是一個運行環境，可用於前端開發，但通常用於撰寫後端應用，例如撰寫API或資料庫連動等，Node.js使用npm的套件管理器，擁有大量的模組跟資源庫，開發生態也很發達，大部分的問題都能在網路上尋求到解答。"
    },
    {
        question: "Explain the Styled-Component you made. What's CSS-in-JS, and how does it help compared to regular CSS?",
        answer: "與Styled-components相比，直接使用.css檔案是比較傳統的做法，css優勢在於一個css樣式可以重複使用於整個專案，可以用在較為大型的專案，而styled-components優勢在於元件封裝，可以讓style跟你的component更緊密的結合，而且易於維護，不過較適用於小型專案。"
    },
    {
        question: "Discuss useState and useEffect. How did you use them?",
        answer: "useState是一個用於狀態管理的hook，可以定義變數的狀態或值，以及定義一個函數去更新這個變數的值，而useEffect是一個專門處理副作用的hook，分為componentDidMount與componentDidUpdate兩種生命週期，分別是定義當畫面被渲染時該執行的程式碼，以及定義當某個值被更新時該執行的程式碼，我在撰寫button動作時，先利用useState定義點擊的初始狀態，以及like數字的初始值，當使用者點擊button時useState會改變clickStatus（點擊狀態），而當useEffect監聽到clickStatus的狀態有被更新，就去更改like的數值（加一或減一）。"
    },
    {
        question: "Describe Client-Side Rendering vs. Server-Side Rendering. How did you achieve Server-Side Rendering in Next.js? Think about getServerSideProps.",
        answer: "Client-Side Rendering（CSR） 是指當使用者在切換不同頁面時，不是直接去server下載畫面，而是直接用JavaScript更改部分頁面內容，所以速度會比較快，React,Vue,Angular皆採用CSR，缺點是SEO較差，通常第一次渲染都要等JS加載完才看得到畫面，而Server-Side Rendering（SSR）可以解決此問題，因為頁面的渲染已經在伺服端完成，所以使用者可以立即看到內容，但缺點是伺服器會需要更多的資源，會造成伺服器的壓力"
    },
    {
        question: "Which coding styles did you follow when coding?",
        answer: "將每個component的檔名統一設為.jsx格式，並以PascalCase方法為檔案取名，對JSX屬性使用雙引號、對JS屬性使用單引號，對每個self-closing的tag都加一個空格在結尾，目前用到這些Coding style。"
    }
]

const GetPostData: React.FC = () => {
    return (
        <div>
            {postData.map((item, idx) => (
                <div key={idx}>
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                    <p>{item.answer}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default GetPostData
