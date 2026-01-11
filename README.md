# Algebraic Structure Explorer

> *Drafted by Gemini based on the Owner's blueprint. Proofread and authorized by the Owner.*

### The Vision
We are building the first **crowdsourced map of algebraic structures**. 

Mathematics is often taught linearly, but this project visualizes it as an evolutionary tree. By starting with fundamental **Sets** and **Operations** at a root node and adding **Axioms** step-by-step, we can map how simple rules evolve into complex systems like Groups, Rings, or Vector Spaces.

**The Purpose**
We want to visualize the dramatic power of individual axioms. By studying this tree, we witness how a single rule change—like an asymmetrical distributive law—radically alters a system.

* **Insight:** Watching theorems grow reveals the true significance of the axioms that birth them.
* **Rigor:** Every branch is anchored by its environment (Sets and Operators). The systematic classification of these growing structures creates a living, rigorous encyclopedia of mathematical reality.

---

### System Architecture: The Logic Engine

This is a **gamified, rigorous logic engine**. We have designed strict rules to ensure the tree remains mathematically sound while allowing for open contribution.

#### 1. The Foundation (`schema.mmd`)
* **Axioms vs. Nodes:** We separate the *Concept* (The Axiom) from its *Usage* (The Node).
* **The Registry:** A central library of axioms avoids duplicates. 
* **Environment Anchoring:** Every root node defines the **Sets** and **Operators** for its entire branch. Contributors must adhere to the notation (e.g., $\cdot$, $+$, $\oplus$) established at the root to maintain branch consistency.

#### 2. The Fractal Architecture: A Tree within a Tree
To handle the complexity of mathematical proofs, we utilize a **Fractal Architecture** separating the high-level map from the local proofs.
* **The Structural Tree (Macro Domain):** This is the main map. Nodes represent **Algebraic Systems**. Edges represent the addition of a **New Axiom**.
* **The Deductive Tree (Micro Domain):** Inside every Structural Node exists a "Theorem Graph."
    * **The Root:** The specific Axiom defining that node.
    * **The Nodes:** Theorems or Lemmas derived within that system.
    * **The Logic:** Contributors build proofs by connecting new **Theorem Nodes** to existing Axioms or previous Theorems.

#### 3. The Lifecycle of Truth (`logic.mmd`)
Nodes (both Structural and Theorem) follow this lifecycle:
* **Red (Unverified):** Every new node starts here as a draft.
* **Green (Verified):** Final canonical status granted by **Admin Approval** or **Community Consensus**. Both carry the same visual weight, emphasizing the crowdsourced nature of the map.
* **Gray (Dead End):** Marks a "Trivial Structure" where the system collapses or no further axioms can be meaningfully added. Status granted by **Admin Approval** or **Community Consensus**.

#### 4. The Economy of Reputation (`logic-score.mmd`)
We track user contributions through a reputation system:
* **Creation Score:** For building valid mathematical systems or proving new theorems.
* **Contributor Score:** For verifying work or identifying structural overlaps.

#### 5. Governance: The Trust Ladder (`logic-governance.mmd`)
To protect the tree from "Axiomatic Pollution" while solving the "Cold Start" problem, we use a tiered permission system based on reputation.

* **Tier 0 (Visitor):** Read-only access.
* **Tier 1 (Novice):** Can **Propose** nodes. Proposals remain "Ghost Nodes" (visible only to the author) until upvoted by a Citizen.
* **Tier 2 (Citizen):** Verified Email + Reputation Threshold. Contributions appear immediately as **Unverified (Red)** on the public map. Can cast weighted votes and flag duplicates.
* **Tier 3 (Librarian/Admin):** Can trigger the **Zombie Protocol** (force-merge), lock controversial nodes, and blacklist bad actors.

**5.1 The Beta Protocol ("Founding Members")**
During the initial launch phase, all authenticated users are granted **Citizen** status to encourage growth. However, we strictly enforce **Domain Separation** to prevent structural damage:
* **Deductive Domain (Theorems):** **Unrestricted.** Users can add theorems freely to existing branches.
* **Structural Domain (Roots):** **Restricted.** Only Admins can define new Root Environments (Sets/Operators) to ensure consistency.

#### 6. The "Zombie" Protocol (`logic-node-delete.mmd`)
As the tree grows, users may inadvertently create duplicate structures. We handle this through the **Deprecation Protocol**:
* **Duplication Triggers:** This occurs due to **Notation Divergence** (naming the same operator differently) or **Permutation Divergence** (adding the same axioms in a different order).
* **The Zombie State:** The duplicate branch is flagged `toBeDeleted` and flashes Yellow.
* **The Migration:** This creates a window for the community to move valuable theorems to the "Survivor Node" before the zombie node is auto-deleted.

### 6.1 The "Permanent Zombie" Strategy (Anti-Vacuum Protocol)
As the tree grows, users will inevitably rediscover the same mathematical structures via different axiom permutations or naming conventions. 

**Our Algorithm Choice:** We use a **Recursive Progenitor Check**. A node is only physically deleted if its parent is also marked for deletion (`toBeDeleted: true`). If the parent is "healthy," the node is preserved as a **Progenitor Zombie**.

**The Reasoning:**
1. **Vacuum Prevention:** If we physically delete a redundant path, we leave the "math-space" empty. A new contributor may unknowingly recreate the exact same redundant path. 
2. **Historical Marker:** By keeping the Progenitor Zombie in a "Locked/Flashing" state, we signify to all future contributors that this specific logical sequence has already been mapped and merged.
3. **Survivor Link:** The Progenitor Zombie acts as a "Redirection Node." The UI provides an immediate link to the **Survivor Node**, guiding users toward the canonical branch while preserving the context of their exploration.

**The Recursive Cleanup Flow:**
* **The Progenitor:** This node detects that its parent is "Healthy" (not marked for deletion). It remains as a permanent, non-interactive warning marker.
* **The Followers (Children):** These detect that their parent is a Zombie. Once their theorems are migrated, they delete themselves and send a "Death Signal" upward. This facilitates a clean, automated purge of the redundant branch until it hits the Progenitor and stops.

---

### The Tech Stack (`stack.mmd`)
* **Core:** React + TypeScript (Vite)
* **Engine:** React Flow / @xyflow/react (Generic Tree Explorer)
* **Math:** KaTeX (for fast LaTeX rendering)
* **Database:** Firebase (NoSQL for the graph structure)

---

## Future Implementation Details & Notes

### 1. Asynchronous Theorem Contribution
* **Living Documents:** A node is never "finished." Contributors can enter a verified node at any time to add new **Theorem Nodes** to its local Deductive Tree.
* **Inheritance:** New theorems added to a parent node are immediately available as tools in the "Inherited Toolkit" for all child nodes.

### 2. Recursive Axiom & Environment Rendering
* **Implementation:** The `MathNode` must traverse the `parentId` chain upwards to construct the full list of axioms and the active **Sets/Operators** environment.
* **UI Side Note:** When a contributor adds a child node, the UI must display the active operator's LaTeX render (e.g., $\cdot$) and its raw form (e.g., `\cdot`) to ensure notation consistency.

### 3. The "Duplicate" Flagging Flow
* **UI Logic:** The user must provide the ID of the "Survivor Node" (or Survivor Theorem).
* **Data Mapping:** `targetNodeId` (The Zombie) points to `duplicateOfId` (The Survivor).

### 4. Duplicate Flagging Guardrails (The "One-Way Ticket" Rule)
* **The Guardrail:** If a node already has a `duplicateOfId` set, the system rejects new Duplicate Flags pointing elsewhere.
* **The Insight Alert:** If a user flags A -> C, but A is already a duplicate of B, the system blocks this and alerts the Admin to check if B and C are also duplicates.

---

## 🛠 TEMPORARY: ALPHA SCAFFOLDING & NEXT STEPS
> **Status:** Jan 11, 2026 - Visualization & Modularity Complete.
> **Action:** This section to be deleted once transition to Phase 2 (Interactivity) is complete.

### 1. Current Implementation Audit
* **`AlgebraicStructureExplorer.tsx`**: Modularized the generic canvas logic to support both Structural and Deductive trees.
* **`index.css`**: Migrated to CSS Modules (`Overlay.module.css`, `Flashcard.module.css`) to prevent style collisions in the Fractal UI.
* **Lineage Logic**: Updated `lineage.ts` to fetch and stack theorems recursively.

### 2. Logic Redaction
* **Isomorphism:** This term has been redacted. All structural overlaps are now handled strictly under the **Duplication/Deprecation** workflow.

### 3. Tomorrow's Sprint
* **Theorem Node Schema:** Update TypeScript interfaces to match the new Fractal `Theorem` definition (adding `parentId`, `status`, `duplicateOfId`).
* **The Workspace View:** Implementing the transition from "Click Node" -> "Open Theorem Tree Explorer."
