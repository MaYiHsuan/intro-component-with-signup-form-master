document.getElementById("myForm").addEventListener("submit", function(event) {
    // 防止表單自動提交
    event.preventDefault();
    // 檢查所有輸入框
    validateAllInputs();
    });

    
    // 包含所有輸入框和圖標的對象數組
    function validateAllInputs() {
        const inputs = [
            { id: "input1", iconId: "icon1", textId: "outtext1" },
            { id: "input2", iconId: "icon2", textId: "outtext2" },
            { id: "input3", iconId: "icon3", textId: "outtext3" },
            { id: "input4", iconId: "icon4", textId: "outtext4" }
        ];
  
  // 檢查每個輸入框是否為空
        inputs.forEach(({ id, iconId, textId  }) => {
            const input = document.getElementById(id);
            const icon = document.getElementById(iconId);
            const text = document.getElementById(textId);
            const inputs = document.querySelectorAll("input");

            inputs.forEach(input => {
              input.setAttribute("data-placeholder", input.getAttribute("placeholder"));
              input.removeAttribute("placeholder");
            });

            if (input.value.trim() === "") {
            input.classList.add("invalid"); // 輸入框變紅
            icon.style.display = "inline";  // 顯示警告圖標
            text.style.display = "inline";
            } else {
            input.classList.remove("invalid"); // 恢復正常
            icon.style.display = "none";       // 隱藏警告圖標
            text.style.display = "none" ;
            }
        });
    }