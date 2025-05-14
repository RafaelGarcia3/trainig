const text = "   Hello, JavaScript World! JavaScript is awesome.   ";
const output = [];

output.push(`Original string: "${text}"`);

// trim
const trimmed = text.trim();
output.push(`After trim(): "${trimmed}"`);

// toUpperCase / toLowerCase
output.push(`toUpperCase(): "${trimmed.toUpperCase()}"`);
output.push(`toLowerCase(): "${trimmed.toLowerCase()}"`);

// includes / startsWith / endsWith
output.push(`includes("JavaScript"): ${trimmed.includes("JavaScript")}`);
output.push(`startsWith("Hello"): ${trimmed.startsWith("Hello")}`);
output.push(`endsWith("awesome."): ${trimmed.endsWith("awesome.")}`);

// slice / substring
output.push(`slice(7, 17): "${trimmed.slice(7, 17)}"`);
output.push(`substring(7, 17): "${trimmed.substring(7, 17)}"`);

// replace / replaceAll
output.push(`replace("JavaScript", "JS"): "${trimmed.replace("JavaScript", "JS")}"`);
output.push(`replaceAll("JavaScript", "JS"): "${trimmed.replaceAll("JavaScript", "JS")}"`);

// split
const words = trimmed.split(" ");
output.push(`split(" "): [${words.join(', ')}]`);

// charAt / indexOf / lastIndexOf
output.push(`charAt(1): "${trimmed.charAt(1)}"`);
output.push(`indexOf("J"): ${trimmed.indexOf("J")}`);
output.push(`lastIndexOf("JavaScript"): ${trimmed.lastIndexOf("JavaScript")}`);

// repeat
output.push(`repeat(2): "${"JS ".repeat(2)}"`);

// padStart / padEnd
const shortStr = "42";
output.push(`padStart(5, '0'): "${shortStr.padStart(5, '0')}"`);
output.push(`padEnd(5, '*'): "${shortStr.padEnd(5, '*')}"`);

// concat
output.push(`concat(" - Done"): "${trimmed.concat(" - Done")}"`);

const section = document.querySelector("section");
output.forEach(text => {
  const para = document.createElement("p");
  para.textContent = text;
  section.appendChild(para);
});
