       // Obtendo todos os botões "Saiba Mais"
       var saibaMaisButtons = document.querySelectorAll(".saiba-mais");

       // Obtendo todos os modais
       var modals = document.querySelectorAll(".modal");
       
       // Obtendo todos os botões de fechar
       var closeBtns = document.querySelectorAll(".close");
       
       // Adicionando evento de clique para cada botão "Saiba Mais"
       saibaMaisButtons.forEach(function(button) {
           button.addEventListener("click", function() {
               // Obtém o ID do modal a partir do atributo data-modal
               var modalId = button.getAttribute("data-modal");
               var modal = document.getElementById(modalId);
               modal.style.display = "flex"; // Exibe o modal
           });
       });
       
       // Adicionando evento de clique para fechar os modais
       closeBtns.forEach(function(btn) {
           btn.addEventListener("click", function() {
               var modal = btn.closest(".modal");
               modal.style.display = "none"; // Fecha o modal
           });
       });
       
       // Fechar o modal ao clicar fora do conteúdo do modal
       window.addEventListener("click", function(event) {
           modals.forEach(function(modal) {
               if (event.target === modal) {
                   modal.style.display = "none"; // Fecha o modal
               }
           });
       });
       
       
       