import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [anilhas, setAnilhas] = useState({
    '20': 0,
    '10': 0,
    '5': 0,
    '2.5': 0,
  });
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(e.target.value));
  };

  const handleClick = () => {
    if (weight < 20) {
      alert('O peso mínimo é 20kg, por conta do peso da barra');
      return;
    }
    let weightLeft = (weight - 20) / 2;
    const anilhasDisponiveis = [20, 10, 5, 2.5];
    const novaDistribuicao: any = {
      '20': 0,
      '10': 0,
      '5': 0,
      '2.5': 0,
    };

    const pesoInicial = weightLeft;
    while (weightLeft > 0) {
      const anilha = anilhasDisponiveis.find((anilha) => weightLeft >= anilha);
      if (!anilha) break;

      novaDistribuicao[anilha.toString()] =
        novaDistribuicao[anilha.toString()] + 1;
      weightLeft -= anilha;
    }

    const pesoCalculado = 20 + (pesoInicial - weightLeft) * 2;
    if (weightLeft > 0) {
      setMensagem(
        `O peso abaixo de ${weight}kg mais próximo possível é de ${pesoCalculado}kg.`
      );
    } else {
      setMensagem(null);
    }

    setAnilhas(novaDistribuicao);
  };

  return (
    <div className="w-screen h-screen bg-slate-900">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Barbell 🏋</h1>
        <h2 className="text-2xl font-medium text-white mt-4">
          Qual o menor número de anilhas que um 🐀 de academia precisa para
          deixar de ser 🐔?
        </h2>

        <form className="flex flex-col items-center justify-center mt-8 bg-slate-800 p-4 rounded-lg text-white">
          <div className="flex flex-col">
            <p className="text-lg font-medium">Tamanho das anilhas em kg</p>
            <div className="flex flex-row gap-4 items-center m-4">
              <span className="w-[80px] h-[80px] bg-slate-700 rounded-full flex items-center justify-center">
                <span className="w-[60px] h-[60px] bg-slate-500 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium">20</span>
                </span>
              </span>
              <span className="w-[70px] h-[70px] bg-slate-700 rounded-full flex items-center justify-center">
                <span className="w-[50px] h-[50px] bg-slate-500 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium">10</span>
                </span>
              </span>
              <span className="w-[60px] h-[60px] bg-slate-700 rounded-full flex items-center justify-center">
                <span className="w-[40px] h-[40px] bg-slate-500 rounded-full flex items-center justify-center">
                  <span className="text-md font-medium">5</span>
                </span>
              </span>
              <span className="w-[50px] h-[50px] bg-slate-700 rounded-full flex items-center justify-center">
                <span className="w-[35px] h-[35px] bg-slate-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">2.5</span>
                </span>
              </span>
            </div>
            <h1 className="font-medium">Quantos kg deseja levantar ao todo?</h1>
            <p className="mt-1 opacity-50">Lembre-se que a barra pesa 20kg</p>
            <input
              type="text"
              className="w-full mt-4 p-2 rounded-lg bg-slate-800 text-white border-2 border-slate-600"
              placeholder="Digite o peso total"
              onChange={handleChange}
            />
            <div
              className="w-full mt-4 p-2 rounded-lg bg-slate-700 text-white font-medium text-center hover:bg-slate-600 cursor-pointer"
              onClick={handleClick}
            >
              Calcular
            </div>
            <div className="my-10 flex flex-row items-center justify-center px-10 h-100">
              <span className="h-[10px] w-1/4 bg-slate-600" />
              {/* Anilhas */}
              {anilhas['2.5'] > 0 &&
                Array.from({ length: anilhas['2.5'] }).map((_, i) => (
                  <span
                    className="h-[50px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {anilhas['5'] > 0 &&
                Array.from({ length: anilhas['5'] }).map((_, i) => (
                  <span
                    className="h-[60px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {anilhas['10'] > 0 &&
                Array.from({ length: anilhas['10'] }).map((_, i) => (
                  <span
                    className="h-[70px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {anilhas['20'] > 0 &&
                Array.from({ length: anilhas['20'] }).map((_, i) => (
                  <span
                    className="h-[80px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {/*  */}
              <span className="h-[15px] w-[10px] bg-slate-600" />
              <span className="h-[8px] w-2/4 bg-slate-600" />
              <span className="h-[15px] w-[10px] bg-slate-600" />
              {/* Anilhas */}
              {anilhas['20'] > 0 &&
                Array.from({ length: anilhas['20'] }).map((_, i) => (
                  <span
                    className="h-[80px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {anilhas['10'] > 0 &&
                Array.from({ length: anilhas['10'] }).map((_, i) => (
                  <span
                    className="h-[70px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {anilhas['5'] > 0 &&
                Array.from({ length: anilhas['5'] }).map((_, i) => (
                  <span
                    className="h-[60px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {anilhas['2.5'] > 0 &&
                Array.from({ length: anilhas['2.5'] }).map((_, i) => (
                  <span
                    className="h-[50px] w-[10px] border border-slate-600 bg-slate-700"
                    key={i}
                  />
                ))}
              {/*  */}
              <span className="h-[10px] w-1/4 bg-slate-600" />
            </div>
            <div className="text-white mt-8">
              <h3 className="text-xl font-bold">Distribuição de Anilhas:</h3>
              {mensagem && <p className="my-2 text-red-500">{mensagem}</p>}
              <p>20 kg: {anilhas['20'] * 2}</p>
              <p>10 kg: {anilhas['10'] * 2}</p>
              <p>5 kg: {anilhas['5'] * 2}</p>
              <p>2.5 kg: {anilhas['2.5'] * 2}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
