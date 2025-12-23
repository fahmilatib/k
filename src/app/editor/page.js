import Script from "next/script";

export default async function Editor({ searchParams }) {
  const { t, back } = await searchParams;
  return (
    <>
      <div id="editor" className="w-dvw h-dvh" />
      <Script type="module">{`
        const printessLoader = await import("${process.env.NEXT_PUBLIC_PRINTESS_JS}");
        const printess = await printessLoader.load({
          token: "${process.env.NEXT_PUBLIC_PRINTESS_SHOP_TOKEN}",
          templateName: "${t}",
          templateVersion: "draft",
          basketId: "Some-Unique-Basket-Or-Session-Id",
          container: document.getElementById("editor"),
          backButtonCallback: (saveToken, thumbnailUrl) => {
            console.log('saveToken: ' + saveToken)
            console.log('thumbnailUrl: ' + thumbnailUrl)
            window.location.href = '${back}'
          },
        })
      `}</Script>
    </>
  )
}
