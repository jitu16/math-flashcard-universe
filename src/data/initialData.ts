/**
 * @file src/data/initialData.ts
 * @description Static seed data to simulate the database. 
 * Includes examples of verified nodes, zombies (deprecated), and isomorphisms.
 */

import type { Axiom, MathNode } from '../types';

// ==========================================
// 1. THE AXIOMS (Concepts)
// ==========================================

export const initialAxioms: Axiom[] = [
  {
    id: 'axComm',
    canonicalName: 'Commutativity',
    aliases: ['Symmetric', 'Abelian'],
    defaultLatex: 'a \\cdot b = b \\cdot a',
    authorId: 'systemAdmin',
    createdAt: Date.now(),
  },
  {
    id: 'axAssoc',
    canonicalName: 'Associativity',
    aliases: ['Grouping'],
    defaultLatex: '(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)',
    authorId: 'systemAdmin',
    createdAt: Date.now(),
  },
  {
    id: 'axIdent',
    canonicalName: 'Identity Element',
    aliases: ['Neutral Element', 'Unity'],
    defaultLatex: '\\exists e : a \\cdot e = a',
    authorId: 'systemAdmin',
    createdAt: Date.now(),
  },
  {
    id: 'axInv',
    canonicalName: 'Inverse Element',
    aliases: ['Reversibility'],
    defaultLatex: '\\forall a, \\exists a^{-1} : a \\cdot a^{-1} = e',
    authorId: 'systemAdmin',
    createdAt: Date.now(),
  },
  {
    id: 'axDist',
    canonicalName: 'Distributivity',
    aliases: [],
    defaultLatex: 'a \\cdot (b + c) = (a \\cdot b) + (a \\cdot c)',
    authorId: 'systemAdmin',
    createdAt: Date.now(),
  },
];

// ==========================================
// 2. THE NODES (The Tree)
// ==========================================

export const initialNodes: MathNode[] = [
  // --- LEVEL 1: ROOTS ---
  {
    id: 'nodeRootComm',
    parentId: null, // Root
    authorId: 'systemAdmin',
    axiomId: 'axComm',
    displayLatex: 'x + y = y + x', // Using additive notation
    status: 'unverified',
    toBeDeleted: false,
    stats: { greenVotes: 50, blackVotes: 1, yellowFlags: 0 },
    createdAt: Date.now(),
  },
  {
    id: 'nodeRootAssoc',
    parentId: null, // Root
    authorId: 'systemAdmin',
    axiomId: 'axAssoc',
    displayLatex: '(x + y) + z = x + (y + z)',
    status: 'verified',
    toBeDeleted: false,
    stats: { greenVotes: 45, blackVotes: 0, yellowFlags: 0 },
    createdAt: Date.now(),
  },

  // --- LEVEL 2: COMBINATIONS ---
  
  // Node A: Commutative + Associative (Foundation of Abelian Group)
  {
    id: 'nodeCommAssoc',
    parentId: 'nodeRootComm', // Child of Commutativity
    authorId: 'userContributor',
    axiomId: 'axAssoc', // Adds Associativity
    displayLatex: '(x + y) + z = x + (y + z)',
    status: 'verified',
    toBeDeleted: false,
    stats: { greenVotes: 20, blackVotes: 0, yellowFlags: 0 },
    createdAt: Date.now(),
  },

  // Node B: Associative + Commutative (Same logic, different path)
  {
    id: 'nodeAssocComm',
    parentId: 'nodeRootAssoc', // Child of Associativity
    authorId: 'userContributor',
    axiomId: 'axComm', // Adds Commutativity
    displayLatex: 'x + y = y + x',
    status: 'verified',
    toBeDeleted: false,
    stats: { greenVotes: 20, blackVotes: 0, yellowFlags: 0 },
    createdAt: Date.now(),
  },

  // --- THE ZOMBIE BRANCH (Type 2 Isomorphism test) ---
  
  // Node C: A duplicate created by accident
  {
    id: 'nodeZombieDuplicate',
    parentId: 'nodeCommAssoc',
    authorId: 'userNovice',
    axiomId: 'axAssoc',
    displayLatex: '\\text{Duplicate of Node A}',
    status: 'deprecated', // <--- FLASH YELLOW
    
    // The "One-Way Ticket" pointers
    duplicateOfId: 'nodeCommAssoc', // Survivor is Node A
    toBeDeleted: true,
    
    stats: { greenVotes: 2, blackVotes: 10, yellowFlags: 5 },
    createdAt: Date.now(),
  },
  
  // Node D: The Child of the Zombie (Should also inherit Flash logic in UI)
  {
    id: 'nodeZombieChild',
    parentId: 'nodeZombieDuplicate',
    authorId: 'userNovice',
    axiomId: 'axIdent',
    displayLatex: 'x \\cdot 0 = x',
    status: 'deprecated', // Inherited status
    duplicateOfId: undefined, // Hasn't been manually mapped yet
    toBeDeleted: true,        // Inherited flag
    stats: { greenVotes: 0, blackVotes: 0, yellowFlags: 0 },
    createdAt: Date.now(),
  },
];
