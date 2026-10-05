function Experience() {
  return (
    <section>
      <h2>Технічні навички</h2>
      <p>Стек технологій та інструменти:</p>
      <ul>
        <li>Python (PyCharm, VS Code, лінтери Ruff / Pylint)</li>
        <li>Мережеві технології (Cisco Packet Tracer, аналіз трафіку)</li>
        <li>Основи вебтехнологій (HTML, CSS, базовий React)</li>
        <li>Система контролю версій Git</li>
      </ul>

      <h2>Досвід та проєкти</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Назва проєкту / напрям</th>
            <th>Опис та технології</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Моделювання комп'ютерних мереж</td>
            <td>Налаштування топологій мереж, VLAN, маршрутизація в Cisco Packet Tracer.</td>
          </tr>
          <tr>
            <td>Розробка на Python</td>
            <td>Написання скриптів, робота з алгоритмами та валідацією даних.</td>
          </tr>
          <tr>
            <td>Веброзробка (CV Project)</td>
            <td>Створення семантичної сторінки резюме та декомпозиція на компоненти React.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Experience;