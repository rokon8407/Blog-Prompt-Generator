function generateContent() {
    const mainKeyword = document.getElementById('mainKeyword').value.trim();
    const lsiKeywords = document.getElementById('lsiKeywords').value.trim();
    const entityInclude = document.getElementById('entityInclude').value.trim();
    const language = document.getElementById('language').value;
    const aiWordRemoval = document.getElementById('aiWordRemoval').value;
    const seoUrl = document.getElementById('seoUrl').value;
    const seoTitle = document.getElementById('seoTitle').value;
    const metaDesc = document.getElementById('metaDesc').value;
    const articleSize = document.getElementById('articleSize').value;
    const toneOfVoice = document.getElementById('toneOfVoice').value;
    const pointOfView = document.getElementById('pointOfView').value;
    const introHook = document.getElementById('introHook').value;
    const conclusion = document.getElementById('conclusion').value;
    const targetCountry = document.getElementById('targetCountry').value;
    const humanizeText = document.getElementById('humanizeText').value;
    const tables = document.getElementById('tables').value;
    const youtubeVideos = document.getElementById('youtubeVideos').value;
    const numberOfVideos = document.getElementById('numberOfVideos').value;
    const bold = document.getElementById('bold').value;
    const h2 = document.getElementById('h2').value;
    const h3 = document.getElementById('h3').value;
    const lists = document.getElementById('lists').value;
    const italics = document.getElementById('italics').value;
    const quotes = document.getElementById('quotes').value;
    const faq = document.getElementById('faq').value;


    let content = `Act as a professional content writer like Neil Patel. The Blog must include the following instructions and be written in a natural and human way, while also being optimized for search engines.Remember must follow Blog Size where mentioned words limite of the blog. \n\n`;
    content += `Main Keyword: ${mainKeyword}\n`;
    content += `LSI Keywords: ${lsiKeywords}\n`;
    content += `Entity Include: ${entityInclude}\n`;
    content += `Language: ${language}\n`;
    content += `AI Word Removal: ${aiWordRemoval}\n`;
    content += `SEO Optimized URL: ${seoUrl}\n`;
    content += `SEO Optimized Title (60 Characters): ${seoTitle}\n`;
    content += `SEO Optimized Meta Description (160 Characters): ${metaDesc}\n`;
    content += `Blog Size: ${articleSize}\n`;
    content += `Tone of Voice: ${toneOfVoice}\n`;
    content += `Point of View: ${pointOfView}\n`;
    content += `Introductory Hook: ${introHook}\n`;
    content += `Conclusion: ${conclusion}\n`;
    content += `Target Country: ${targetCountry}\n`;
    content += `Humanize Text: ${humanizeText}\n`;
    content += `Tables: ${tables}\n`;
    content += `Youtube Videos: ${youtubeVideos}\n`;
    content += `Number Of Videos: ${numberOfVideos}\n`;
    content += `Bold: ${bold}\n`;
    content += `H2 Headings: ${h2}\n`;
    content += `H3 Headings: ${h3}\n`;
    content += `Lists: ${lists}\n`;
    content += `Italics: ${italics}\n`;
    content += `Quotes: ${quotes}\n`;
    content += `FAQ: ${faq}\n`;
    

    document.getElementById('generatedContent').value = content;

    navigator.clipboard.writeText(content).then(function() {
        alert('Prompt copied to clipboard!');
    }, function() {
        alert('Failed to copy Prompt.');
    });
}
