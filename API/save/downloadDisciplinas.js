const fs = require('fs');
const path = require('path');
const {Document,Packer, Paragraph, TextRun, HeadingLevel,AlignmentType,Table,TableCell,TableRow} = require("docx");
let namedisciplinas = [{name:'основ кримінального кодексу щодо військових злочинів та відповідальності за них'},
    {name:'основ міжнародного гуманітарного права'},
    {name:'Статутів Збройних Сил України'},
    {name:'підтримувати підрозділ у стані постійної бойової готовності'},
    {name:'планувати, організовувати та контролювати повсякденну діяльність підрозділу'},
    {name:'управляти повсякденною діяльністю підрозділу через підпорядкований сержантський склад'},
    {name:'здійснювати підготовку та управляти підрозділом під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'приймати обґрунтовані рішення в складній обстановці під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'вести (відпрацьовувати) бойові (звітні) документи'},
    {name:'організовувати і вести розвідку під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'організовувати і підтримувати стійкий звязок під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'здійснювати заходи з інженерної підготовки підрозділу під час підготовки та в ході виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'здійснювати РХБ захист дій підрозділу під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'здійснювати заходи з топогеодезичного забезпечення дій підрозділу  під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'організовувати заходи ППО та маскування підрозділу'},
    {name:'здійснювати заходи з медичного забезпечення дій підрозділу під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'організовувати взаємодію з іншими підрозділами'},
    {name:'володіння штатним озброєнням та військовою технікою'},
    {name:'організовувати експлуатацію озброєння та військової техніки (обслуговування та ремонт) під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'виховувати у підлеглих патріотизм та любов до Батьківщини'},
    {name:'виховувати особовий склад та зміцнювати військову дисципліну у підпорядкованому підрозділі'},
    {name:'проводити навчальні заняття з особовим складом підпорядкованого підрозділу з дотриманням заходів безпеки'},
    {name:'здатність до мотивації особового складу на успішне виконання завдання'},
    {name:'вміння працювати в команді'},
    {name:'особиста дисциплінованість, стресостійкість та витривалість'},
    {name:'швидко реагувати на ризькі зміни в бойовій (навчальній) обстановці'}];
let nameDoc ='worddisciplinas.docx';

module.exports = async  function createDocDisciplina(year,specailize,mas){

    const doc  = new Document();
    let paragraph1= new Paragraph({
        text:`Рік випуску - ${year}  За спеціальністю - ${specailize}`,
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER
    });
    let paragraph2= new Paragraph({
        text:`Звіт про Середні значення оцінок про випускників по дисциплінам`,
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER
    });
    const table = new Table({
        rows: [
            new TableRow({
                tableHeader:true,
                children: [
                    new TableCell({
                        children: [new Paragraph('Назва дисципліни')]
                    }),
                    new TableCell({
                        children: [new Paragraph('Середня оцінка Офіцерів')],
                    }),
                    new TableCell({
                        children: [new Paragraph('Середня оцінка Командирів')],
                    }),
                ],
            }),
        ],
    });
    for (let i=0;i<mas.length;i++){
        console.log(mas[i].midleBallOficers,mas[i].midleComanders);
        table.addChildElement(new TableRow({children:[
                new TableCell({
                    children: [new Paragraph(namedisciplinas[i].name)]
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].midleBallOficers.toString())],
                }),
                new TableCell({
                    children: [new Paragraph(mas[i].midleComanders.toString())],
                }),
            ]}))
    }
    await doc.addSection({children:[paragraph1,paragraph2,table]});
    let  buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(path.join(__dirname, '../../public/word/',nameDoc),buffer);

    return  path.join(__dirname,'../../public/word/',nameDoc)
};
