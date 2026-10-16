import "./Espelho.css";

// Itens de exemplo. Troque pelos dados que vierem da sua API (já mapeados pelo backend).
const ITENS_EXEMPLO = [
  {
    id: "1",
    nome: "Nome do álbum",
    artista: "Nome do artista",
    capaUrl: "/capa-exemplo.jpg",
    spotifyUrl: "https://open.spotify.com/album/ID_DO_ALBUM",
  },
];

function Header({ nomeApp }) {
  return (
    <header className="topo">
      <a className="marca" href="/">{nomeApp}</a>
      <nav className="menu" aria-label="Principal">
        <a href="#playlists">Playlists</a>
        <a href="#conta">Conta</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  );
}

function Hero({ loginUrl }) {
  return (
    <section className="hero">
      <h1>Seus dados do Spotify, em um só lugar.</h1>
      <p>
        Projeto de estudo que usa a API Web do Spotify para mostrar suas
        músicas e playlists mais ouvidas.
      </p>
      <a className="botao" href={loginUrl}>Entrar com Spotify</a>
    </section>
  );
}

// A capa aparece inteira e o card inteiro leva ao Spotify (exigência das diretrizes).
function AlbumCard({ item }) {
  return (
    <a className="card" href={item.spotifyUrl} target="_blank" rel="noopener noreferrer">
      <img src={item.capaUrl} alt={`Capa de ${item.nome}`} />
      <strong>{item.nome}</strong>
      <span>{item.artista}</span>
      <small>Ouvir no Spotify</small>
    </a>
  );
}

function CardGrid({ itens }) {
  return (
    <section className="grade" id="playlists" aria-label="Músicas e álbuns">
      {itens.map((item) => (
        <AlbumCard key={item.id} item={item} />
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="rodape" id="sobre">
      <a
        className="atribuicao"
        href="https://www.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Baixe o arquivo oficial na página de design do Spotify e salve em public/ */}
        <img src="/spotify-logo-oficial.svg" alt="Spotify" />
        <span>Dados fornecidos pelo Spotify</span>
      </a>
      <p>Projeto de estudo, sem fins lucrativos e não afiliado ao Spotify.</p>
    </footer>
  );
}

export default function Espelho({
  nomeApp = "Espelho",
  loginUrl = "/auth/login",
  itens = ITENS_EXEMPLO,
}) {
  return (
    <>
      <Header nomeApp={nomeApp} />
      <main>
        <Hero loginUrl={loginUrl} />
        <CardGrid itens={itens} />
      </main>
      <Footer />
    </>
  );
}