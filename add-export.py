import codecs

# 读取HTML文件
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

# 导出功能脚本
export_script = '''
<script>
(function() {
    function addButtons() {
        var header = document.querySelector('header');
        if (!header) return;
        
        var div = document.createElement('div');
        div.style.cssText = 'margin-top:20px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;';
        
        var btn1 = document.createElement('button');
        btn1.textContent = '📝 导出Markdown';
        btn1.style.cssText = 'padding:10px 20px; background:#43e97b; border:none; color:white; border-radius:25px; cursor:pointer; font-weight:bold;';
        btn1.onclick = exportMD;
        
        var btn2 = document.createElement('button');
        btn2.textContent = '📄 打印/导出PDF';
        btn2.style.cssText = 'padding:10px 20px; background:#ff6b6b; border:none; color:white; border-radius:25px; cursor:pointer; font-weight:bold;';
        btn2.onclick = function() { window.print(); };
        
        div.appendChild(btn1);
        div.appendChild(btn2);
        header.appendChild(div);
    }
    
    function exportMD() {
        var content = '# 知识点学习笔记\\n\\n> 导出时间：' + new Date().toLocaleString('zh-CN') + '\\n\\n---\\n\\n';
        
        document.querySelectorAll('.chapter').forEach(function(ch) {
            var title = ch.querySelector('h3, h4');
            if (title) {
                content += '## ' + title.textContent.trim() + '\\n\\n';
            }
            ch.querySelectorAll('.detail, .advanced, .formula, .example').forEach(function(el) {
                content += el.textContent.trim() + '\\n\\n';
            });
            content += '---\\n\\n';
        });
        
        var blob = new Blob([content], {type: 'text/markdown;charset=utf-8'});
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = '知识点笔记.md';
        a.click();
        URL.revokeObjectURL(url);
    }
    
    window.exportMD = exportMD;
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addButtons);
    } else {
        addButtons();
    }
})();
</script>
</body>'''

# 替换</body>标签
html = html.replace('</body>', export_script)

# 写回文件
with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)

print('✅ 导出功能已成功添加')
