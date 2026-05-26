let series = [];
async function carregarSeries() {
        try {
            const nomeSerie = document.getElementById("showInput").value.trim();
            if (nomeSerie === "") {
                const main = document.querySelector("main");
                main.innerHTML = "";
                const cartao = document.createElement("div");
                const p = document.createElement("p");
                p.innerText = "Por favor, digite o nome de um TV show.";
                cartao.className = "card card-serie p-3 g-3 shadow-lg";
                cartao.appendChild(p);
                main.appendChild(cartao);
                return;
            }
            const main = document.querySelector("main");
            main.innerHTML = "";
            const p = document.createElement("p");
            p.innerText = "Carregando séries...";
            p.className = "fs-3 fw-bold text-center mt-5 text-secondary";
            main.appendChild(p);
            const resposta = await fetch(`https://api.tvmaze.com/search/shows?q=${nomeSerie}`);
            series = await resposta.json(); 
            mostrarNaTela(series);
            } 
            
            catch (erro) {
                const main = document.querySelector("main");
                main.innerHTML = "";
                const cartao = document.createElement("div");
                cartao.className = "card card-serie p-3 g-3 shadow-lg";
                const p = document.createElement("p");
                p.innerText = erro;
                cartao.appendChild(p);
                main.appendChild(cartao);
             }
        } 
        function mostrarNaTela(series) {
            const main = document.querySelector("main");
            main.innerHTML = "";

            if (series.length === 0) {
                const cartao = document.createElement("div");
                cartao.className = "card card-serie p-3 g-3 shadow-lg";
                const p = document.createElement("p");
                p.innerText = "Nenhum TV show encontrado";
                cartao.appendChild(p);
                main.appendChild(cartao);
                return;
            }

            series.forEach(serie => {
                const cartao = document.createElement("div");
                cartao.className = "card card-serie d-flex flex-row p-3 gap-3 shadow-lg";
                cartao.style.width = "500px";

                const imagem = document.createElement("img");
                imagem.className = "imagem";

                const titulo = document.createElement("h3");
                titulo.innerText = serie.show.name;

                const score = document.createElement("p");

                if (serie.score == null) {
                    score.innerText = "Score: Indisponível";
                } else {
                    score.innerText = `Score: ${serie.score.toFixed(2)}`;
                }

                const descricao = document.createElement("p");
                descricao.className = "descricao";

                if (serie.show.summary) {
                    descricao.innerHTML = serie.show.summary;
                } else {
                    descricao.innerText = "Descrição indisponível";
                }

                const info = document.createElement("div");
                info.className = "d-flex flex-column";

                if (serie.show.image == null) {
                    const semImagem = document.createElement("p");
                    semImagem.innerText = "Imagem indisponível";
                    cartao.appendChild(semImagem);
                } else {
                    imagem.src = serie.show.image.medium;
                    cartao.appendChild(imagem);
                }

                info.appendChild(titulo);
                info.appendChild(score);
                info.appendChild(descricao);
                cartao.appendChild(info);
                main.appendChild(cartao);
            });
        }
