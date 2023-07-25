const html = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&family=Source+Serif+4:wght@600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/iyarivky/sing-ribet-web/css/styles.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/iyarivky/sing-ribet-web/css/js-snackbar.css" />
    <script src="https://cdn.jsdelivr.net/gh/iyarivky/sing-ribet-web/js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/iyarivky/sing-ribet-web/js//js-snackbar.js"></script>
  </head>
  <body>
    <div class="judul">
      <h2>sing-ribet</h2>
      <h3>convert xray/v2ray url link to sing-box JSON.</h3>
    </div>
    <div class="card">
      <div class="container">
        <h4><b>Input Link Config</b></h4>
        <textarea
          id="input"
          placeholder="Paste the v2ray/xray config link here, multi links separated by Enter"
        ></textarea
        ><br />
        <div class="tombol">
          <button class="button" onclick="parseUrl()">Convert</button><br />
        </div>
        <h4><b>Base SFA Config</b></h4>
        <textarea id="input"></textarea><br />
        <div class="tombol">
          <button class="button" onclick="downloadConfig()">Download</button>
          <button class="button" onclick="pasteConfig()">
            Copy to Clipboard
          </button>
        </div>
        <h4><b>Simple SFA Config</b></h4>
        <textarea id="input"></textarea><br />
        <div class="tombol">
          <button class="button" onclick="downloadConfig()">Download</button>
          <button class="button" onclick="pasteConfig()">
            Copy to Clipboard
          </button>
        </div>
        <h4><b>Base BFM Config</b></h4>
        <textarea id="input"></textarea><br />
        <div class="tombol">
          <button class="button" onclick="downloadConfig()">Download</button>
          <button class="button" onclick="pasteConfig()">
            Copy to Clipboard
          </button>
        </div>
        <h4><b>Simple BFM Config</b></h4>
        <textarea id="input"></textarea><br />
        <div class="tombol">
          <button class="button" onclick="downloadConfig()">Download</button>
          <button class="button" onclick="pasteConfig()">
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
    <footer>
      <div class="kaki">
        <p><a href="https://github.com/iyarivky/sing-ribet-web">Github</a></p>
      </div>
    </footer>
  </body>
</html>`;

Deno.serve((req: Request) => new Response(html, {headers: {"content-type": "text/html;charset=UTF-8"}, status:200}));
