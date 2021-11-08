В React для каждого объекта DOM существует соответствующий «виртуальный объект DOM». Виртуальный объект DOM - это представление объекта DOM, например облегченная копия.

Виртуальный объект DOM имеет те же свойства, что и реальный объект DOM, но ему не хватает реальной возможности напрямую изменять то, что на экране.

Манипулирование DOM происходит медленно. Управление виртуальным DOM происходит намного быстрее, потому что на экране ничего не отображается. Думайте о манипулировании виртуальной DOM как о редактировании чертежа, а не о перемещении комнат в реальном доме.

==============================================================================

Когда вы визуализируете элемент JSX, каждый виртуальный объект DOM обновляется.

Это звучит невероятно неэффективно, но затраты незначительны, потому что виртуальная модель DOM может обновляться так быстро.

После обновления виртуальной DOM React сравнивает виртуальную DOM с моментальным снимком виртуальной DOM, который был сделан непосредственно перед обновлением.

Сравнивая новую виртуальную DOM с версией до обновления, React точно определяет , какие виртуальные объекты DOM были изменены. Этот процесс называется «дифференцированием».

Как только React узнает, какие виртуальные объекты DOM были изменены, React обновляет эти объекты и только эти объекты в реальной DOM. В нашем предыдущем примере React был бы достаточно умен, чтобы воссоздать ваш единственный отмеченный элемент списка и оставить остальную часть вашего списка в покое.

Это большая разница! React может обновлять только необходимые части DOM. Репутация React как производителя производительности во многом обусловлена ​​этим нововведением.

=============================================================================

Таким образом, вот что происходит, когда вы пытаетесь обновить DOM в React:

Обновляется вся виртуальная модель DOM.
Виртуальный DOM сравнивается с тем, как он выглядел до того, как вы его обновили. React определяет, какие объекты были изменены.
Измененные объекты, и только измененные объекты, обновляются в реальной DOM.
Изменения в реальном DOM вызывают изменение экрана.