const fs = require('fs');
const path = require('path');
const {Document,Packer, Paragraph,  HeadingLevel,AlignmentType,Table,TableCell,TableRow} = require("docx");
let masBaseStokes = [
    {name: 'Морально-психологічне забезпечення підготовки та застосування Збройних Сил України'},
    {name: '3агальна тактика'},
    {name: 'Основи військового управління (у тому числі штабні процедури НАТО)'},
    {name: 'Управління повсякденною діяльністю підрозділів (у тому числі охорона державної таємниці, безпека життєдіяльності, основи охорони праці, безпека військової діяльності)'},
    {name: 'Радіаційний, хімічний, біологічний захист підрозділів   (у тому числі екологія)'},
    {name: 'Військова топографія'},
    {name: 'Інженерна підготовка'},
    {name: 'Організація військового зв’язку,'},
    {name: 'Бойова система виживання воїнів (у тому числі тактична медицина)'},
    {name: 'Статути Збройних Сил України та їх практичне застосування (у тому числі стройова підготовка)'},
    {name: 'Стрілецька зброя та вогнева підготовка'},
    {name: 'Фізичне виховання та спеціальна фізична підготовка'},
    {name: 'Іноземна мова (загальний, загальновійськовий та спеціальний курс)'},
    {name: 'Правознавство (у тому числі основи військового законодавства та міжнародне гуманітарне право, морське право для спеціальностей підготовки військових фахівців морського профілю)'},
    {name: 'Військова педагогіка та психологія (у тому числі лідерство)'}
];
let nameDoc ='wordopds.docx';
module.exports = async  function createDoc(year,specailize,mas){

    const doc  = new Document();
    let paragraph1= new Paragraph({
        text:`Рік випуску - ${year}  За спеціальністю - ${specailize}`,
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER
});
    let paragraph2= new Paragraph({
        text:`Звіт про корисності та недоліки`,
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER
    });
    const table = new Table({
        rows: [
            new TableRow({
                tableHeader:true,
                children: [
                    new TableCell({
                        children: [new Paragraph('Дисципліни')]
                    }),
                    new TableCell({
                        children: [new Paragraph('A1')],
                    }),
                    new TableCell({
                        children: [new Paragraph('A2')],
                    }),
                    new TableCell({
                        children: [new Paragraph('A3')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Б1')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Б2')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Б3')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Б4')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Б5')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Б6')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Відсоток не вибраних недоліків')],
                    }),
                ],
            }),
        ],
    });
    for (let i=0;i<mas.length;i++){
        table.addChildElement(new TableRow({children:[
                new TableCell({
                    children: [new Paragraph(masBaseStokes[i].name)]
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentCoris.procentA1.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentCoris.procentA2.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentCoris.procentA3.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentB1.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentB2.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentB3.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentB4.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentB5.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentB6.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].procentNedolik.procentNone.toString())],
                }),
            ]}))
    }
    await doc.addSection({children:[paragraph1,paragraph2,table]});
    let  buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(path.join(__dirname, '../../public/word/',nameDoc),buffer);

    return  path.join(__dirname,'../../public/word/',nameDoc)
};
