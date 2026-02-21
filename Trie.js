/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode(letter);
            }
            node = node.children[letter];
        }
        node.isWord = true;
    }

    hasNode(word){
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            node = node.children[word[i]];
            if (!node) return false;
        }
        return node.isWord === true;
    }

    getAllNodes(){
        const all = [];

        function walk(current) {
            all.push(current);
            for (const child of Object.values(current.children)) {
                walk(child);
            }
        }

        walk(this.root);
        return all;
    }
}

module.exports = { Trie };
