// app/api/subscribe/route.ts
import { transporter } from "@/helpers/nodemailer";
import { graphcms } from "@/lib/graphqlClient";
import { SUBSCRIBE_NEWSLETTER } from "@/lib/mutations";
import { NextRequest, NextResponse } from "next/server";

// Configuração do nodemailer

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Validar o e-mail
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "E-mail inválido" },
        { status: 400 }
      );
    }

    const variables = { email };

   const response = await graphcms.request(SUBSCRIBE_NEWSLETTER,variables).catch( error => console.error(JSON.stringify(error, undefined, 2)));

   console.log(response)

    // Enviar e-mail de confirmação
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Confirmação de Inscrição na Newsletter",
      text: "Obrigado por se inscrever na nossa newsletter!",
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Inscrição realizada com sucesso!",
    });
  } catch (error) {
    console.error("Erro no endpoint /api/subscribe:", error);
    return NextResponse.json(
      { success: false, message: "Erro no servidor" },
      { status: 500 }
    );
  }
}
