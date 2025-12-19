function Footer() {
  return (
    <footer className="text-center p-4 bg-foreground text-background grow place-content-center mt-10">
      <p>&copy; {new Date().getFullYear()} The Problem Stack</p>
    </footer>
  )
}

export default Footer