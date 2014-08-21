def deaf_grandma(string)
  speak_up =  "Huh? Speak up, Sonny!"
  year = Random.new.rand(1900..2000)
  yells_back = "No, not since #{year}."

  if string.upcase != string
    speak_up
  else
    yells_back
  end
end

puts deaf_grandma("Hello")
puts deaf_grandma("HELLO")

describe "deaf_grandma" do
  it "return speakUp if string is lower case" do
    string = deaf_grandma("hello")

    expect(string).to eq "Huh? Speak up, Sonny!"
  end

  it "returns 'No, not since a random year if it use uppercase'" do
    rand = double(rand: 1938)
    allow(Random).to receive(:new).and_return(rand)
    string = deaf_grandma("HELLO")

    expect(string).to eq "No, not since 1938."
  end
end
