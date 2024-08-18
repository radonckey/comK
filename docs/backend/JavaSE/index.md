#Java 的面向对象编程
众所周知，Java 是一门面向对象语言，但是并不是程序员使用了 java，他就是在用面向对象编程。我目前负责的项目有大量前同事留下来的可读性非常差的代码，每天大部分的工时都是在处理旧项目的 bug，而且拓展性极差，开发新的功能简直欲哭无泪。

在这里引以为戒，顺便复习一下面向对象编程，巩固一下基础知识，记一下笔记。

迄今为止，面向对象编程并没有一个统一、官方的定论，一般来讲我们认为面向对象编程是一种编程思想或者编程风格，它以类和对象为基本概念，并拥有封装、抽象、继承、多态四个基本特征（并不一定，go 语言也是面向对象语言，但是不支持继承...）。

封装（Encapsulation）
是什么
封装也被称为信息隐藏或者数据访问保护。 类通过暴露访问接口，来控制外部仅能通过暴露的接口访问类的成员信息（可以是方法或者变量）

如何实现
public class Person {

    private Integer height;

    private String name;
    //通过成员变量的私有化实现数据隐藏
    private Date birthday;

    //由于生日是不会变的，因此我们只通过构造函数的形式给予初始化方式，不提供set函数，
    //这也是访问保护的体现
    public Encapsulation(Integer height,String name,Date birthday){
        this.height = height;
        this.name = name;
        this.birthday = birthday;
    }

    public Encapsulation () {}

    public Integer getHeight() {return height;}

    public void setHeight(Integer height) {this.height = height;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public Date getBirthday() {return birthday;}

}
使用封装的意义
上面的 Person 类只有三个成员变量，这里有一个比较特殊的变量 birthday，不同于 name 和 height，生日对于每个人来说都是固定且唯一的，所以这个变量应该在人出生（对象的构造）时就定义好，后面也不应该修改，因此这里我没有给出 birthday 的 setter，而是将这个变量的赋值放在了构造器中。

刚学编程的时候就知道类就是对现实世界的实体的封装，但是现在发觉这句话并没有那么简单，封装并不是简简单单的把属性、方法放在一个文件里，封装更重要的是对数据的保护（通过访问权限修饰符实现）以及访问的控制（通过提供的接口实现），类在设计的时候也要遵循这样的原则，而不是写完成员变量就自动生成 getter 和 setter。

如果我们对类中的属性的访问都不做控制，那任何代码都可以访问修改类中的属性，这样看起来虽然很灵活，实现起来也很简单，但是从后续的代码拓展来看，这种代码就太过简陋了，而且也容易带来一些不可控的问题。比如，后续同事对 Person 类赋值的时候，由于不懂业务或者 bug，给 birthday 变量重新赋值了，那么 Person 对象的 birthday 和 age（假设有）就对不上了，从这一点来看，封装能提高代码的易用性和拓展性。

总结一下，良好的封装性能够提高代码的健壮性、拓展性、可维护性、易用性等。

抽象（Abstraction）
是什么
抽象的作用是隐藏方法的具体实现，让调用者只需要关心类提供了哪些功能，而不用关心功能是怎么实现的。java 中使用 interface 和 abstract 关键字实现抽象功能。

如何实现
public interface Person {

    void eat();

    void run();

    void marry(Person p);

    Person giveBirth(Person p);

}

public class DefaultPerson implements Person{

    @Override
    public void eat() {...}

    @Override
    public void run() {...}

    @Override
    public Person giveBirth(Person p) {...}

    @Override
    public void marry(Person p) {...}

}
使用抽象的意义
上面的代码中，我把人的几种通用行为作为抽象成了一个接口类，因为每个人对这几种行为的具体实现可能都不一样，所以具体的 Person 类可以通过实现接口，然后实现具体的方法。实际上，抽象非常容易实现，而且他的含义非常广泛，比如我们使用其他厂商提供的 SDK 做快速开发，我们不清楚 SDK 中的功能具体是怎么实现的，但是只要知道具体的作用，就能直接调用，这同样也是一种抽象，有些时候甚至可以理解为封装就伴随着抽象。

java 中使用 interface 更多的是提供一种规范性，如果没有 Person 接口，那么新实现的 Person 类甚至可以没有 eat（）方法（jdk8 可以用 default 默认实现），这可能带来很大的隐患。另外，使用接口还有一个很大的好处是实现了屏蔽了类的具体实现，这点和多态有关，下面再细说。

抽象更多的是一种思维，我们在编程的时候也要带入这种思维，比如 getTaobaoOrder() 这个方法随着项目的拓展可能就不太适用了，用 getOrder() 会更好。

继承（Inheritance）
是什么
继承是用来表示类之间的 is-a 关系，java 只支持单继承。

怎么实现
public class DefaultPerson implements Person{

    @Override
    public void eat() {...}

    @Override
    public void run() {...}

    @Override
    public Person giveBirth(Person p) {...}

    @Override
    public void marry(Person p) {...}

}
class Programmer extend DefaultPerson {

    public void eatCoffe{
        super.eat();
    }

}
使用继承的意义
继承最大的好处是代码复用，子类可以直接复用父类的代码，另外从设计的角度看，继承也有一种层次分明的美感，非常符合人类对现实世界的认知（套娃除外）。

但是关联关系也可以很好的实现继承的功能，个人认为继承最好少用，首先，继承会带来父类与子类之间的高耦合，不利于日后父类的维护，其次，子类对于父类有高入侵性，这同样是一个隐患，而且套娃套太多真的很反人类啊，易读性很差！

拓展
java 为什么不支持多重继承？

多重继承有副作用：钻石问题(菱形继承)。
假设类 B 和类 C 继承自类 A，且都重写了类 A 中的同一个方法，而类 D 同时继承了类 B 和类 C，那么此时类 D 会继承 B、C 的方法，那对于 B、C 重写的 A 中的方法，类 D 会继承哪一个呢？这里就会产生歧义。
考虑到这种二义性问题，Java 不支持多重继承。

多态（Polymorphism）
是什么
多态是指子类可以替换父类，在实际的代码运行过程中，调用子类的方法实现。

如何实现
//代码来自极客时间
public class DynamicArray {
private static final int DEFAULT_CAPACITY = 10;
protected int size = 0;
protected int capacity = DEFAULT_CAPACITY;
protected Integer[] elements = new Integer[DEFAULT_CAPACITY];

public int size() { return this.size; }
public Integer get(int index) { return elements[index];}
//...省略 n 多方法...

public void add(Integer e) {
ensureCapacity();
elements[size++] = e;
}

protected void ensureCapacity() {
//...如果数组满了就扩容...代码省略...
}
}

public class SortedDynamicArray extends DynamicArray {
@Override
public void add(Integer e) {
ensureCapacity();
int i;
for (i = size-1; i>=0; --i) { //保证数组中的数据有序
if (elements[i] > e) {
elements[i+1] = elements[i];
} else {
break;
}
}
elements[i+1] = e;
++size;
}
}

public class Example {
public static void test(DynamicArray dynamicArray) {
dynamicArray.add(5);
dynamicArray.add(1);
dynamicArray.add(3);
for (int i = 0; i < dynamicArray.size(); ++i) {
System.out.println(dynamicArray.get(i));
}
}

public static void main(String args[]) {
DynamicArray dynamicArray = new SortedDynamicArray();
//父类对象引用子类对象（把 DynamicArray 的子类实现 dynamicArray 传递给 test 方法，代码依然成立）
test(dynamicArray); // 打印结果：1、3、5
}
}
上面的代码中有三个语法实现了多态：

父类对象引用子类对象
编程语言要支持继承或者抽象接口类，这样才能屏蔽变量的实现
支持父类（父接口）方法的重新
使用多态的意义
使用多态，我们可以在需要拓展的时候根据不同的业务重写不同的实现方法，这点提高了代码的可拓展性。

当然更加重要的是使用多态屏蔽了变量的具体实现，在不确定变量具体实现的情况下，我们可以将方法的形参类型设置成父类或者父接口，甚至还可以设置成 Object，这点大大提高了代码的灵活程度和可拓展性。
