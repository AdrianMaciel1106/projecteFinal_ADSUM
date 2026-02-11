# ADSUM 🎓
> **"L’assistència, simplificada. El compromís, potenciat."**

Projecte Final de Grau Superior (DAW). Aplicació Web Progressiva (PWA) per a la gestió d'assistència escolar mitjançant codis QR dinàmics, geolocalització i intel·ligència artificial.

---

## 🛠️ Stack Tecnològic
Aquest projecte utilitza una arquitectura moderna basada en microserveis i components:

* **Frontend:** Vue.js 3 (Vite) + TailwindCSS
* **Backend:** NestJS + TypeORM
* **Base de Dades:** MySQL
* **Temps Real:** Socket.io
* **Integracions:** Google Sheets API, Gemini AI

---

## 🗄️ Esquema de Base de Dades
L'arquitectura de dades està dissenyada per garantir la integritat de l'assistència i evitar la suplantació d'identitat (Anti-Frau).

```mermaid
classDiagram
    direction LR
    
    class GRUPS {
        PK id_grup
        string nom
        string curs
    }

    class MODULS {
        PK id_modul
        string nom
        FK professor_id
    }

    class USUARIS {
        PK id_usuari
        string nom
        string email
        enum rol
        FK grup_id
    }

    class ASSISTENCIES {
        PK id_assistencia
        FK alumne_id
        FK modul_id
        date data
        enum estat
    }

    class DISPOSITIUS {
        PK id_dispositiu
        FK usuari_id
        string fingerprint
    }

    GRUPS "1" --> "*" USUARIS : Agrupa
    GRUPS "1" --> "*" MODULS : Té
    USUARIS "1" --> "*" MODULS : Imparteix
    USUARIS "1" --> "*" ASSISTENCIES : Genera
    MODULS "1" --> "*" ASSISTENCIES : Registra
    USUARIS "1" --> "*" DISPOSITIUS : Té
