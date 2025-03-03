import { NextResponse } from "next/server";

const data = [
    {
        id: 1,
        slug:"aud",
        name: "Music.. ",
        artist: "Ahmed",
        cover: "/assets/fourth.jpg",
        audio: "/naa1.mpeg",

    },
    {
        id: 2,
        slug:"audd",
        name: "Ya Noori Nasheed ",
        artist: "Khuwaja",
        cover: "/assets/third.jpg",
        audio: "/naa2.mpeg",
    },
    {
        id: 3,
        slug:"auud",
        name: "Aata Qabal hu Arabic",
        artist: "Qaim",
        cover: "/assets/fifth.jpg",
        audio: "/naa5.mpeg",
    },
    {
        id: 4,
        slug:"auuud",
        name: "Ya li li LILI Music ",
        artist: "Faraz",
        cover: "/assets/yaLiLi.jpg",
        audio: "/naa4.mpeg",
    },
    {
        id: 5,
        slug:"auuuud",
        name: "Arsh per dhoon he Naat",
        artist: "Khuwaja",
        cover: "/assets/second.jpg",
        audio: "/naa3.mpeg ",
    },
  
   

];

export async function GET() {
    return NextResponse.json(data);
}