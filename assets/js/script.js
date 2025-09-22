// گرفتن عناصر از صفحه
      const searchInput = document.getElementById("searchInput");
      const plantList = document.getElementsByClassName("plant");
      const toggleTheme = document.getElementById("toggleTheme");

      // بررسی حالت ذخیره‌شده در localStorage و اعمال آن
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      }

      // جستجوی گیاهان بر اساس ورودی کاربر
      searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < plantList.length; i++) {
          const plantName = plantList[i].textContent.toLowerCase();
          plantList[i].style.display = plantName.includes(filter)
            ? "block"
            : "none";
        }
      });

      // تغییر حالت شب/روز و ذخیره در localStorage
      toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // ذخیره حالت جدید
        const currentTheme = document.body.classList.contains("dark")
          ? "dark"
          : "light";
        localStorage.setItem("theme", currentTheme);

        // افکت چرخش دکمه
        toggleTheme.classList.add("clicked");
        setTimeout(() => toggleTheme.classList.remove("clicked"), 300);
      });