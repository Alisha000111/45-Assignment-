function sandwich(...items: string[]): void {
    console.log("sandwich order:")
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}
console.log("enjoy your sandwich alisha muhammad irfan")
sandwich('capsicum','tomato','chicken')
sandwich('beaf','cheese')
sandwich('garlic chicken','mayo sauce')
