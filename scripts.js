//Cotação da moeda do dia
const USD = 5.50
const EUR = 6.50
const GBP = 7.50

//Obtendo os elementos do formulário 
const form = document.querySelector("form")

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números.
 amount.addEventListener("input", () => {
 const hasCharactersRegex = /\D+/g 
 amount.value = amount.value.replace(hasCharactersRegex, "")  
  })

  //Capturando o evento de submit (enviar) do formulário
  form.onsubmit = (event) => {
    event.preventDefault() //pra não fazer o reelod 
   
    switch(currency.value){
      case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
        case "EUR":
          convertCurrency(amount.value, EUR, "€")
            break
            case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
          }
        }

  //Função para converter a moeda.
  function convertCurrency(amount, price, symbol){
       try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total.     
        let total = amount * price        

        // Verifica se o resultado não é um número
        if (isNaN(total)){
          return alert ("por favor, digite o valor corretamente para converter")
        }

        //Formatar o valor total.
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total.
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer com o resultado.
        footer.classList.add("show-result")

       } catch (error){
        
        //Remove a classe do footer removendo ela após.
        footer.classLista.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
       }  
       }

       // Função criada para formatar a moeda para Real brasileiro
       function formatCurrencyBRL(value){
        //Converte para número para utilizar o toLocaleString para formatar no padrão BRL.
        return Number(value).toLocaleString("pt-Br", {
          style: "currency", 
          currency: "BRL",
        })
       }
