# The Math Multiverse: An Infinite Axiomatic Tree

> *Drafted by Gemini based on the Owner's blueprint. Proofread and authorized by the Owner.*

### The Vision
We are building the first **crowdsourced, infinite map of mathematical structures**. 

Most math is taught linearly. This project is different. It is an evolutionary tree. We start with fundamental **Axioms** (Commutativity, Associativity, etc.), and users build **Nodes** (Systems) by combining them. 

If you take a path of axioms, what universe do you end up in? A Ring? A Lattice? A completely new algebra no one has named yet? This project allows us to find out.

---

### How It Works: The Logic of the Multiverse

This is not just a wiki. It is a **gamified, rigorous logic engine**. We have designed a strict set of rules to ensure the tree remains mathematically sound while allowing for open contribution.

All architectural decisions are documented in the `/designs/design-docs/` folder. You will find both the source Mermaid files (`.mmd`) and compiled PDFs for easy viewing.

#### 1. The Foundation (`schema.mmd`)
* **Axioms vs. Nodes:** We separate the *Concept* (The Axiom) from its *Usage* (The Node).
* **The Registry:** A central library of axioms avoids duplicates. Users can use "aliasing" for concepts (e.g., treating "Abelian" and "Commutative" as the same logic).
* **See:** `designs/design-docs/schema.pdf`

#### 2. The Lifecycle of Truth (`logic.mmd`)
* **Red (Unverified):** Every new node starts here. It is a draft.
* **Green (Verified):** The community votes. If it passes the threshold, it becomes canonical.
* **Gray (Dead End):** If a node is proven inconsistent (e.g., leads to $1=0$), we don't delete it. We mark it Gray. This is a "Warning Sign" for future travelers.
* **See:** `designs/design-docs/logic.pdf`

#### 3. The Economy of Reputation (`logic-score.mmd`)
We reward rigor.
* **Creation Score:** For building valid systems.
* **Contributor Score:** For verifying others' work.
* **The Librarian Bonus:** A special reward for users who find **Isomorphisms** (wormholes between branches) or **Duplicates**.
* **See:** `designs/design-docs/logic-score.pdf`

#### 4. The "Zombie" Protocol (`logic-node-delete.mmd`)
Garbage collection in an infinite tree is dangerous. If you delete a parent, you kill the children. We solved this with a **Deprecation Protocol**:
* **The Mark:** Bad nodes are flagged `to_be_deleted`.
* **The Zombie State:** They flash Yellow and block new submissions.
* **The Migration:** The community has time to move valuable theorems to a "Survivor Node."
* **The Signal:** When the last child leaves, the node auto-deletes and signals its parent to check itself.
* **See:** `designs/design-docs/logic-node-delete.pdf`

---

### The Tech Stack (`stack.mmd`)
We are building this on a modern, reactive stack designed for heavy visual manipulation.

* **Core:** React + TypeScript (Vite)
* **Engine:** React Flow (for the Infinite Canvas)
* **Math:** KaTeX (for fast LaTeX rendering)
* **Database:** Firebase (NoSQL for the graph structure)
* **See:** `designs/design-docs/stack.pdf` and `designs/design-docs/view.pdf`

---

### For Contributors
If you are pulling this repo to look at the architecture:
1.  Navigate to `designs/design-docs/`.
2.  Open the PDFs to see the blueprints side-by-side with the code.
3.  The `.mmd` files can be re-compiled using `mermaid-cli` if you modify the logic.

*Let's build the map.*
